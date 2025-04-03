const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'tu_secreto_jwt';

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'Token no proporcionado' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user.rol !== 'Administrador') {
    return res.status(403).json({ message: 'Acceso no autorizado' });
  }
  next();
};

module.exports = {
  authMiddleware,
  adminMiddleware
}; 