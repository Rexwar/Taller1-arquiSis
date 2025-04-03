const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./auth/routes/authRoutes');
const userRoutes = require('./auth/routes/userRoutes');
const initDatabase = require('./auth/config/init');
const connectDB = require('./auth/config/mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/auth', authRoutes);
app.use('/usuarios', userRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de StreamFlow funcionando' });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Inicializar base de datos y servidor
const startServer = async () => {
  try {
    // Inicializar MongoDB primero
    console.log('Iniciando conexión a MongoDB...');
    await connectDB();
    console.log('MongoDB conectado exitosamente');

    // Luego inicializar PostgreSQL
    console.log('Iniciando conexión a PostgreSQL...');
    await initDatabase();
    console.log('PostgreSQL inicializado exitosamente');

    // Finalmente iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

// Manejo de señales de terminación
process.on('SIGTERM', () => {
  console.log('Señal SIGTERM recibida. Cerrando servidor...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Señal SIGINT recibida. Cerrando servidor...');
  process.exit(0);
});

startServer(); 