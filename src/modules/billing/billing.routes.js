const express = require('express');
const router = express.Router();

// POST /facturas
router.post('/', (req, res) => {
    // TODO: Implementar creación de factura
});

// GET /facturas/{id}
router.get('/:id', (req, res) => {
    // TODO: Implementar obtención de factura por ID
});

// PATCH /facturas/{id}
router.patch('/:id', (req, res) => {
    // TODO: Implementar actualización de estado de factura
});

// DELETE /facturas/{id}
router.delete('/:id', (req, res) => {
    // TODO: Implementar eliminación de factura
});

// GET /facturas
router.get('/', (req, res) => {
    // TODO: Implementar listado de facturas por usuario
});

module.exports = router; 