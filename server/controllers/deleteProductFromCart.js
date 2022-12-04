const carrito = require("../models/carrito");
const Producto = require("../models/productos");

const deleteProductFromCart = async (req, res) => {
  const { productId } = req.params;


  const productInCart = await carrito.findById(productId);

  
  const { nombre, precio, _id } = await Producto.findOne({
    nombre: productInCart.nombre,
  });

  await carrito.findByIdAndDelete(productId);

  await Producto.findByIdAndUpdate(
    _id,
    { agregado: false, nombre, precio },
    { new: true }
  )
    .then((Producto) => {
      res.json({
        mensaje: `El producto ${Producto.nombre} fue eliminado del carrito`,
      });
    })
    .catch((error) => res.json({ mensaje: "Hubo un error" }));
};

module.exports = deleteProductFromCart;