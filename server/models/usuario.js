const { model, Schema } = require('mongoose');
const UsuarioSchema = new Schema({
    nombre:{type: String, required: true}, 
    correo:{type: String, required: true, unique: true},
    admin: {type:Number, default: 0 },
    contraseña:{type: String, required: true},
    direccion:{type: String, required: true},
    comuna:{type: String, required: true},
    provincia:{type: String, required: true},
    region:{type: String, required: true},
    napartamento:{type: String, required: false},
    nacimiento: {type: Date, required: true},
    rut: {type: Number, required: true},
    sexo: {type: String, required: true},
    telefono: { type: Number, required: true } 
});
module.exports = model('Usuario',UsuarioSchema);
