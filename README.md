# StreamFlow - Plataforma de Streaming

## Descripción
StreamFlow es una plataforma de streaming desarrollada como parte del Taller 1 de Arquitectura de Sistemas. La aplicación está basada en una arquitectura de monolito modular que integra módulos especializados para la gestión de usuarios, autenticación, facturación y administración de contenido audiovisual.

## Estructura del Proyecto
```
/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── index.js
│   ├── modules/
│   │   ├── auth/
│   │   ├── billing/
│   │   ├── users/
│   │   └── videos/
│   └── index.js
├── .env
├── docker-compose.yml
└── README.md
```

## Requisitos
- Docker
- Docker Compose
- Node.js (v14 o superior)

## Configuración de Bases de Datos

### Bases de Datos Disponibles
1. **Autenticación (PostgreSQL)**
   - Puerto: 5432
   - Archivo de configuración: `docker-compose.auth.yml`

2. **Videos (MongoDB)**
   - Puerto: 27017
   - Archivo de configuración: `docker-compose.videos.yml`

3. **Usuarios (MongoDB)**
   - Puerto: 27018
   - Archivo de configuración: `docker-compose.users.yml`

4. **Facturación (MariaDB)**
   - Puerto: 3306
   - Archivo de configuración: `docker-compose.billing.yml`

### Comandos de Despliegue

#### Desplegar Todas las Bases de Datos
```bash
docker-compose up -d
```

#### Desplegar Base de Datos Específica
```bash
# Para autenticación
docker-compose -f docker-compose.auth.yml up -d

# Para videos
docker-compose -f docker-compose.videos.yml up -d

# Para usuarios
docker-compose -f docker-compose.users.yml up -d

# Para facturación
docker-compose -f docker-compose.billing.yml up -d
```

#### Detener Bases de Datos
```bash
# Detener todas las bases de datos
docker-compose down

# Detener base de datos específica
docker-compose -f docker-compose.auth.yml down
docker-compose -f docker-compose.videos.yml down
docker-compose -f docker-compose.users.yml down
docker-compose -f docker-compose.billing.yml down
```

## Configuración del Entorno
El archivo `.env` contiene todas las configuraciones necesarias para la conexión con las bases de datos y otros parámetros de la aplicación. Asegúrate de configurar los siguientes valores:

```env
# Configuración de la aplicación
PORT=3000
NODE_ENV=development

# Configuración de PostgreSQL (Auth)
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
POSTGRES_USER=streamflow_user
POSTGRES_PASSWORD=streamflow_password
POSTGRES_DB=streamflow_auth

# Configuración de MongoDB (Videos)
MONGO_VIDEOS_HOST=mongodb_videos
MONGO_VIDEOS_PORT=27017
MONGO_VIDEOS_USER=streamflow_user
MONGO_VIDEOS_PASSWORD=streamflow_password
MONGO_VIDEOS_DB=streamflow_videos

# Configuración de MongoDB (Users)
MONGO_USERS_HOST=mongodb_users
MONGO_USERS_PORT=27017
MONGO_USERS_USER=streamflow_user
MONGO_USERS_PASSWORD=streamflow_password
MONGO_USERS_DB=streamflow_users

# Configuración de MariaDB (Billing)
MARIADB_HOST=mariadb
MARIADB_PORT=3306
MARIADB_USER=streamflow_user
MARIADB_PASSWORD=streamflow_password
MARIADB_DB=streamflow_billing

# Configuración de JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h
```

## Notas Importantes
- Cada base de datos tiene su propio archivo de configuración Docker Compose para facilitar el despliegue independiente.
- Los volúmenes de Docker se utilizan para persistir los datos de las bases de datos.
- Asegúrate de que los puertos especificados no estén en uso por otros servicios.
- Las credenciales de las bases de datos se pueden modificar en los archivos de configuración correspondientes.

## Requisitos Previos
- Node.js v14 o superior
- PostgreSQL
- MariaDB
- MongoDB

## Configuración
1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/streamflow.git
cd streamflow
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
# Configuración del servidor
PORT=3000
NODE_ENV=development

# PostgreSQL (Autenticación)
PG_USER=postgres
PG_HOST=localhost
PG_DATABASE=streamflow_auth
PG_PASSWORD=postgres
PG_PORT=5432

# MariaDB (Facturación)
MARIA_HOST=localhost
MARIA_USER=root
MARIA_PASSWORD=root
MARIA_DATABASE=streamflow_billing
MARIA_PORT=3306

# MongoDB (Videos)
MONGO_URI=mongodb://localhost:27017/streamflow_videos

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1h
```

## Ejecución
- Desarrollo: `npm run dev`
- Producción: `npm start`
- Tests: `npm test`

## Endpoints

### Módulo de Usuarios
- POST /usuarios - Crear usuario
- GET /usuarios/{id} - Obtener usuario por ID
- PATCH /usuarios/{id} - Actualizar usuario
- DELETE /usuarios/{id} - Eliminar usuario
- GET /usuarios - Listar usuarios

### Módulo de Autenticación
- POST /auth/login - Iniciar sesión
- PATCH /auth/usuarios/{id} - Actualizar contraseña

### Módulo de Facturación
- POST /facturas - Crear factura
- GET /facturas/{id} - Obtener factura por ID
- PATCH /facturas/{id} - Actualizar estado de factura
- DELETE /facturas/{id} - Eliminar factura
- GET /facturas - Listar facturas por usuario

### Módulo de Videos
- POST /videos - Subir video
- GET /videos/{id} - Obtener video por ID
- PATCH /videos/{id} - Actualizar video
- DELETE /videos/{id} - Eliminar video
- GET /videos - Listar videos 