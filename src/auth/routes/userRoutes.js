const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

// Rutas públicas
router.post('/', userController.createUser);

// Rutas protegidas (requieren autenticación)
router.get('/:id', authMiddleware, userController.getUserById);
router.patch('/:id', authMiddleware, userController.updateUser);
router.delete('/:id', authMiddleware, adminMiddleware, userController.deleteUser);

// Rutas de administrador
router.get('/', authMiddleware, adminMiddleware, userController.getAllUsers);

module.exports = router; 