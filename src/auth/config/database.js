const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('streamflow_auth', 'streamflow_user', 'streamflow_password', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize; 