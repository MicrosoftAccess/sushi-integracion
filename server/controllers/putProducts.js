const carrito = require("../models/carrito");

const putProduct = async (req, res) => {
  const { productId } = req.params;
  const { query } = req.query;
  const body = req.body;


  const productBuscado = await carrito.findById(productId);


  if (!query) {
    res.status(404).json({ mensaje: "Debes enviar una query" });

  
  } else if (productBuscado && query === "add") {
    body.cantidad = body.cantidad + 1;

    await carrito.findByIdAndUpdate(productId, body, {
      new: true,
    }).then((Producto) => {
      res.json({
        mensaje: `El producto: ${Producto.nombre} fue actualizado`,
        Producto,
      });
    });


  } else if (productBuscado && query === "del") {
    body.cantidad = body.cantidad - 1;

    await carrito.findByIdAndUpdate(productId, body, {
      new: true,
    }).then((Producto) =>
      res.json({
        mensaje: `El producto: ${Producto.nombre} fue actualizado`,
        Producto,
      })
    );
  } else {
    res.status(400).json({ mensaje: "Ocurrio un error" });
  }
};

module.exports = putProduct;