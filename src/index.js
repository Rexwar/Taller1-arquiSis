const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importar rutas
const authRoutes = require('./modules/auth/auth.routes');
const usersRoutes = require('./modules/users/users.routes');
const billingRoutes = require('./modules/billing/billing.routes');
const videosRoutes = require('./modules/videos/videos.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/auth', authRoutes);
app.use('/usuarios', usersRoutes);
app.use('/facturas', billingRoutes);
app.use('/videos', videosRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de StreamFlow funcionando' });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    status: 'error',
    message: 'Algo salió mal!'
  });
});

// Inicializar base de datos y servidor
const startServer = async () => {
  try {
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