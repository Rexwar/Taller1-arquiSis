# Checklist Taller 1 - StreamFlow

## Desarrollador A (Módulos de Autenticación y Usuarios)

### Configuración Inicial
- [ ] Crear repositorio en GitHub
- [ ] Configurar visibilidad pública del repositorio
- [ ] Crear README.md con instrucciones de instalación y uso
- [ ] Configurar entorno de desarrollo
- [ ] Elegir y configurar base de datos para módulo de usuarios (no PostgreSQL)

### Módulo de Autenticación
- [ ] Configurar base de datos PostgreSQL en Supabase
- [ ] Implementar modelo de datos para autenticación
- [ ] Desarrollar endpoints:
  - [ ] POST /auth/login
  - [ ] PATCH /auth/usuarios/{id}
- [ ] Implementar generación de tokens JWT
- [ ] Implementar validación de tokens
- [ ] Implementar middleware de autenticación
- [ ] Desplegar módulo de autenticación en Render

### Módulo de Usuarios
- [ ] Configurar base de datos elegida
- [ ] Implementar modelo de datos para usuarios
- [ ] Desarrollar endpoints:
  - [ ] POST /usuarios
  - [ ] GET /usuarios/{id}
  - [ ] PATCH /usuarios/{id}
  - [ ] DELETE /usuarios/{id}
  - [ ] GET /usuarios
- [ ] Implementar validaciones de datos
- [ ] Implementar soft delete
- [ ] Implementar búsqueda flexible
- [ ] Desplegar módulo de usuarios

### Postman
- [ ] Crear colección completa de endpoints
- [ ] Implementar flujos de prueba:
  - [ ] Flujo 1: Listar videos, registrar usuario, login y obtener video
  - [ ] Flujo 2: Login admin, ver facturas y marcar como pagada
- [ ] Configurar pre/post scripts para variables de entorno

## Desarrollador B (Módulos de Videos y Facturación)

### Configuración Inicial
- [ ] Configurar entorno de desarrollo
- [ ] Configurar conexión con repositorio

### Módulo de Videos
- [ ] Configurar MongoDB en Mongo Atlas
- [ ] Implementar modelo de datos para videos
- [ ] Desarrollar endpoints:
  - [ ] POST /videos
  - [ ] GET /videos/{id}
  - [ ] PATCH /videos/{id}
  - [ ] DELETE /videos/{id}
  - [ ] GET /videos
- [ ] Implementar soft delete
- [ ] Implementar búsqueda por título y género
- [ ] Desplegar módulo de videos

### Módulo de Facturación
- [ ] Configurar MariaDB en Filess
- [ ] Implementar modelo de datos para facturas
- [ ] Desarrollar endpoints:
  - [ ] POST /facturas
  - [ ] GET /facturas/{id}
  - [ ] PATCH /facturas/{id}
  - [ ] DELETE /facturas/{id}
  - [ ] GET /facturas
- [ ] Implementar soft delete
- [ ] Implementar filtrado por estado
- [ ] Desplegar módulo de facturación

### Postman
- [ ] Crear colección completa de endpoints
- [ ] Implementar flujos de prueba:
  - [ ] Flujo 3: Login admin, ver usuarios y eliminar usuario
  - [ ] Flujo 4: Login cliente y cambiar contraseña
- [ ] Configurar pre/post scripts para variables de entorno

## Tareas Compartidas

### Seeder
- [ ] Crear script de seeder
- [ ] Generar datos de prueba:
  - [ ] 100-200 usuarios
  - [ ] 300-400 facturas
  - [ ] 400-600 videos
- [ ] Documentar uso del seeder en README.md

### Documentación
- [ ] Crear modelos ER en DBDiagram
- [ ] Desarrollar informe conjunto:
  - [ ] Portada con logo UCN
  - [ ] Índice
  - [ ] Modelos ER
  - [ ] Fundamentación de arquitectura
  - [ ] Beneficios de la arquitectura
  - [ ] Justificación de base de datos de usuarios
  - [ ] Análisis de migración a SOA
  - [ ] Propuesta de módulo de recomendaciones
  - [ ] Posibles mejoras (opcional, +0.3 décimas)

### Entrega Final
- [ ] Preparar archivo ZIP/RAR con:
  - [ ] Enlace al repositorio
  - [ ] Enlace a la aplicación desplegada
  - [ ] Lista de integrantes con nombres, apellidos y RUT
  - [ ] Informe en PDF
- [ ] Verificar cumplimiento de todos los requisitos
- [ ] Realizar entrega en Campus Virtual UCN

---
Nota: Para marcar una tarea como completada, reemplazar `[ ]` por `[x]` en el archivo. 