const {model, Schema} = require('mongoose')
const productosSchema = new Schema({
    nombre: {type: String, required: true, unique: true},
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
    urlImagen: {type: String, required: false},
    agregado: {type: Boolean, default: false},
})

module.exports = model('Producto', productosSchema);