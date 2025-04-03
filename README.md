# StreamFlow - Módulo de Autenticación y Usuarios

Este es el módulo de autenticación y usuarios para la plataforma de streaming StreamFlow, implementado como parte de una arquitectura monolítica modular.

## Requisitos Previos

- Node.js (v14 o superior)
- Docker y Docker Compose
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd streamflow
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar la base de datos PostgreSQL con Docker:
```bash
docker-compose up -d
```

4. Inicializar la base de datos:
```bash
psql -h localhost -U streamflow_user -d streamflow_auth -f src/auth/config/init.sql
```

5. Configurar variables de entorno:
- Copiar el archivo `.env.example` a `.env`
- Ajustar las variables según sea necesario

## Uso

1. Iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

2. Iniciar el servidor en modo producción:
```bash
npm start
```

## Endpoints

### Autenticación

- `POST /auth/login`
  - Iniciar sesión
  - Body: `{ "email": "string", "password": "string" }`

- `PATCH /auth/usuarios/:id`
  - Actualizar contraseña
  - Requiere token de autenticación
  - Body: `{ "currentPassword": "string", "newPassword": "string", "confirmPassword": "string" }`

### Usuarios

- `POST /usuarios`
  - Crear nuevo usuario
  - Body: `{ "email": "string", "password": "string", "nombre": "string", "apellido": "string", "rol": "string" }`

- `GET /usuarios`
  - Obtener todos los usuarios (solo administradores)
  - Requiere token de autenticación
  - Query params opcionales: `search`, `rol`

- `GET /usuarios/:id`
  - Obtener usuario por ID
  - Requiere token de autenticación

- `PATCH /usuarios/:id`
  - Actualizar usuario
  - Requiere token de autenticación
  - Body: `{ "nombre": "string", "apellido": "string", "rol": "string" }`

- `DELETE /usuarios/:id`
  - Eliminar usuario (soft delete)
  - Requiere token de autenticación y rol de administrador

## Tests

1. Ejecutar tests de autenticación:
```bash
npm run test:auth
```

2. Ejecutar tests de usuarios:
```bash
npm run test:users
```

## Estructura del Proyecto

```
src/
├── auth/
│   ├── config/
│   │   ├── database.js
│   │   └── init.sql
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   └── tests/
│       ├── auth.test.js
│       └── user.test.js
└── index.js
```

## Base de Datos

El módulo utiliza PostgreSQL como base de datos, ejecutándose en un contenedor Docker. La configuración de la base de datos se encuentra en el archivo `docker-compose.yml`. 