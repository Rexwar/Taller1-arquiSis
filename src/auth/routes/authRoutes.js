const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authMiddleware } = require('../middleware/auth');

// Ruta para iniciar sesión
router.post('/login', authController.login);

// Ruta para actualizar contraseña (requiere autenticación)
router.patch('/usuarios/:id', authMiddleware, authController.updatePassword);

module.exports = router; 