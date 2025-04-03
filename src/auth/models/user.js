const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Por favor ingrese un email válido']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  rol: {
    type: String,
    required: true,
    enum: ['Administrador', 'Cliente'],
    default: 'Cliente'
  },
  deleted_at: {
    type: Date
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: false
  }
});

// Índices para búsqueda eficiente
userSchema.index({ email: 1 });
userSchema.index({ nombre: 1, apellido: 1 });
userSchema.index({ rol: 1 });

// Hook para hashear la contraseña antes de crear/actualizar
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Métodos de instancia
userSchema.methods.validatePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

// Métodos estáticos
userSchema.statics.findByEmail = async function(email) {
  return this.findOne({ email, deleted_at: null });
};

userSchema.statics.findById = async function(id) {
  return this.findOne({ _id: id, deleted_at: null }).select('-password');
};

userSchema.statics.updatePassword = async function(id, newPassword) {
  const user = await this.findById(id);
  if (user) {
    user.password = newPassword;
    await user.save();
  }
};

// Soft delete
userSchema.methods.softDelete = async function() {
  this.deleted_at = new Date();
  await this.save();
};

const User = mongoose.model('User', userSchema);

module.exports = User; 