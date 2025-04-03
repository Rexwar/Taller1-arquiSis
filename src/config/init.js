const { authSequelize, billingSequelize } = require('./sequelize');
const User = require('../modules/auth/models/user');
const Invoice = require('../modules/billing/models/invoice');

const initDatabase = async () => {
  try {
    // Sincronizar modelos de autenticación
    await authSequelize.sync({ force: true });
    console.log('Base de datos de autenticación sincronizada correctamente');

    // Crear usuario administrador por defecto
    await User.create({
      email: 'admin@streamflow.com',
      password: 'admin123',
      nombre: 'Administrador',
      apellido: 'Sistema',
      rol: 'Administrador'
    });
    console.log('Usuario administrador creado correctamente');

    // Sincronizar modelos de facturación
    await billingSequelize.sync({ force: true });
    console.log('Base de datos de facturación sincronizada correctamente');

    // Crear factura de prueba
    await Invoice.create({
      userId: 1,
      amount: 9990,
      status: 'pending',
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 días desde ahora
    });
    console.log('Factura de prueba creada correctamente');

  } catch (error) {
    console.error('Error al inicializar las bases de datos:', error);
    throw error;
  }
};

module.exports = initDatabase; 