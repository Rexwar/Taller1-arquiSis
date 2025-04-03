const express = require('express');
const router = express.Router();
const User = require('./models/user');

// Importar rutas
const userRoutes = require('./routes/user.routes');

// Usar rutas
router.use('/usuarios', userRoutes);

module.exports = {
  router,
  User
}; 