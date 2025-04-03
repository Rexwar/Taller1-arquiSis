const express = require('express');
const router = express.Router();

// POST /videos
router.post('/', (req, res) => {
    // TODO: Implementar subida de video
});

// GET /videos/{id}
router.get('/:id', (req, res) => {
    // TODO: Implementar obtención de video por ID
});

// PATCH /videos/{id}
router.patch('/:id', (req, res) => {
    // TODO: Implementar actualización de video
});

// DELETE /videos/{id}
router.delete('/:id', (req, res) => {
    // TODO: Implementar eliminación de video
});

// GET /videos
router.get('/', (req, res) => {
    // TODO: Implementar listado de videos
});

module.exports = router; 