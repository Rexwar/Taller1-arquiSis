const User = require('../models/user');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'tu_secreto_jwt';

const authController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findByEmail(email);

      if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      if (user.deleted_at) {
        return res.status(401).json({ message: 'Usuario eliminado' });
      }

      const validPassword = await user.validatePassword(password);
      if (!validPassword) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email, rol: user.rol },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      const userData = user.toJSON();
      delete userData.password;

      res.json({
        user: userData,
        token
      });
    } catch (error) {
      console.error('Error en login:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  async updatePassword(req, res) {
    try {
      const { id } = req.params;
      const { currentPassword, newPassword, confirmPassword } = req.body;

      if (newPassword !== confirmPassword) {
        return res.status(400).json({ message: 'Las contraseñas no coinciden' });
      }

      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      const validPassword = await user.validatePassword(currentPassword);
      if (!validPassword) {
        return res.status(401).json({ message: 'Contraseña actual incorrecta' });
      }

      await User.updatePassword(id, newPassword);
      res.json({ message: 'Contraseña actualizada exitosamente' });
    } catch (error) {
      console.error('Error al actualizar contraseña:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
};

module.exports = authController; 