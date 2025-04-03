const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://streamflow_user:streamflow_password@localhost:27017/streamflow_users?authSource=admin';

const connectDB = async () => {
  try {
    // Configurar opciones de conexión
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Tiempo de espera para selección de servidor
      socketTimeoutMS: 45000, // Tiempo de espera para operaciones
    };

    // Intentar conectar
    await mongoose.connect(MONGODB_URI, options);
    console.log('MongoDB conectado exitosamente');

    // Manejar eventos de conexión
    mongoose.connection.on('error', (err) => {
      console.error('Error en la conexión de MongoDB:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB desconectado');
    });

  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    // Intentar reconectar después de 5 segundos
    setTimeout(connectDB, 5000);
    throw error;
  }
};

module.exports = connectDB; 