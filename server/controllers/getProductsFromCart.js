const carrito = require("../models/carrito");

const getProductsCart = async (req, res) => {
  const productsCart = await carrito.find();

  if (productsCart) {
    res.json({ productsCart });
  } else {
    res.json({ mensaje: "No hay productos en el carrito" });
  }
};

module.exports = getProductsCart;