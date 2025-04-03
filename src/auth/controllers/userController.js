const User = require('../models/user');

const userController = {
  // Crear un nuevo usuario
  async createUser(req, res) {
    try {
      const { email, password, nombre, apellido, rol } = req.body;

      // Verificar si el email ya existe
      const existingUser = await User.findByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'El email ya está registrado' });
      }

      // Crear el usuario
      const user = await User.create({
        email,
        password,
        nombre,
        apellido,
        rol
      });

      // Eliminar la contraseña de la respuesta
      const userData = user.toJSON();
      delete userData.password;

      res.status(201).json(userData);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  // Obtener un usuario por ID
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      res.json(user);
    } catch (error) {
      console.error('Error al obtener usuario:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  // Obtener todos los usuarios
  async getAllUsers(req, res) {
    try {
      const { search, rol } = req.query;
      let where = {};

      // Aplicar filtros si se proporcionan
      if (search) {
        where = {
          [Op.or]: [
            { nombre: { [Op.iLike]: `%${search}%` } },
            { apellido: { [Op.iLike]: `%${search}%` } },
            { email: { [Op.iLike]: `%${search}%` } }
          ]
        };
      }

      if (rol) {
        where.rol = rol;
      }

      const users = await User.findAll({
        where,
        attributes: { exclude: ['password'] }
      });

      res.json(users);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  // Actualizar un usuario
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { nombre, apellido, rol } = req.body;

      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      // Actualizar campos permitidos
      if (nombre) user.nombre = nombre;
      if (apellido) user.apellido = apellido;
      if (rol) user.rol = rol;

      await user.save();

      // Eliminar la contraseña de la respuesta
      const userData = user.toJSON();
      delete userData.password;

      res.json(userData);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  // Eliminar un usuario (soft delete)
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      await user.destroy();
      res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
};

module.exports = userController; 