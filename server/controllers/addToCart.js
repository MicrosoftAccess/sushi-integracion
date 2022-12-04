const carrito = require("../models/carrito");
const products = require("../models/productos");

const agregarProducto = async (req, res) => {
  const { nombre, precio } = req.body;

 
  const estaEnProducts = await products.findOne({ nombre });

 
  const noEstaVacio = nombre !== "" && precio !== "";

 
  const estaEnElCarrito = await carrito.findOne({ nombre });

  
  if (!estaEnProducts) {
    res.status(400).json({
      mensaje: "Este producto no se encuentra en nuestra base de datos",
    });

    
  } else if (noEstaVacio && !estaEnElCarrito) {
    const newProductInCart = new carrito({ nombre, precio, cantidad: 1 });

   
    await products.findByIdAndUpdate(
      estaEnProducts?._id,
      { agregado: true, nombre, precio },
      { new: true }
    )
      .then((products) => {
        newProductInCart.save();
        res.json({
          mensaje: `El producto fue agregado al carrito`,
          products,
        });
      })
      .catch((error) => console.error(error));

   
  } else if (estaEnElCarrito) {
    res.status(400).json({
      mensaje: "El producto ya esta en el carrito",
    });
  }
};

module.exports = agregarProducto;