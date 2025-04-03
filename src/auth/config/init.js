const sequelize = require('./database');
const User = require('../models/user');

const initDatabase = async () => {
  try {
    // Sincronizar todos los modelos con la base de datos
    await sequelize.sync({ force: true });
    console.log('Base de datos PostgreSQL sincronizada correctamente');

    // Crear usuario administrador por defecto
    await User.create({
      email: 'admin@streamflow.com',
      password: 'admin123',
      nombre: 'Administrador',
      apellido: 'Sistema',
      rol: 'Administrador'
    });
    console.log('Usuario administrador creado correctamente');

  } catch (error) {
    console.error('Error al inicializar la base de datos PostgreSQL:', error);
    throw error;
  }
};

module.exports = initDatabase; 