const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuración de la base de datos de autenticación
const authSequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Configuración de la base de datos de facturación
const billingSequelize = new Sequelize(
  process.env.MARIADB_DB,
  process.env.MARIADB_USER,
  process.env.MARIADB_PASSWORD,
  {
    host: process.env.MARIADB_HOST,
    port: process.env.MARIADB_PORT,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Función para probar la conexión
const testConnections = async () => {
  try {
    await authSequelize.authenticate();
    console.log('Conexión a PostgreSQL establecida correctamente');
    
    await billingSequelize.authenticate();
    console.log('Conexión a MariaDB establecida correctamente');
  } catch (error) {
    console.error('Error al conectar con las bases de datos:', error);
    throw error;
  }
};

module.exports = {
  authSequelize,
  billingSequelize,
  testConnections
}; 