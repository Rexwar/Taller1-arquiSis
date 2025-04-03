const express = require('express');
const router = express.Router();

// POST /usuarios
router.post('/', (req, res) => {
    // TODO: Implementar creación de usuario
});

// GET /usuarios/{id}
router.get('/:id', (req, res) => {
    // TODO: Implementar obtención de usuario por ID
});

// PATCH /usuarios/{id}
router.patch('/:id', (req, res) => {
    // TODO: Implementar actualización de usuario
});

// DELETE /usuarios/{id}
router.delete('/:id', (req, res) => {
    // TODO: Implementar eliminación de usuario
});

// GET /usuarios
router.get('/', (req, res) => {
    // TODO: Implementar listado de usuarios
});

module.exports = router; 