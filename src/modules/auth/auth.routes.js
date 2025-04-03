const express = require('express');
const router = express.Router();

// POST /auth/login
router.post('/login', (req, res) => {
    // TODO: Implementar login
});

// PATCH /auth/usuarios/{id}
router.patch('/usuarios/:id', (req, res) => {
    // TODO: Implementar actualización de contraseña
});

module.exports = router; 