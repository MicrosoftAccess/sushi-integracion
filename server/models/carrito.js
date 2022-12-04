const {model, Schema } = require('mongoose');
const CarritoSchema = new Schema({
    nombre: { type: String, required: true, unique: true},
    imagen: { type: String, required: false},
    cantidad: { type: Number, required: true},
    precio: { type: Number, required: true}
});
module.exports = model("Carrito",CarritoSchema)