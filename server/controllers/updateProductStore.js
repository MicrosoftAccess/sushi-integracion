const Producto = require('../models/productos')

const updateProductStore = async (req, res) => {
    const { productId } = req.params;
    const { query } = req.query;
    const body = req.body;
  
  
    const productBuscado = await Producto.findById(productId);
  
  
    if (!query) {
      res.status(404).json({ mensaje: "Debes enviar una query" });
  
    
    } else if (productBuscado && query === "update") {
      body.nombre = body.nombre
      body.descripcion = body.descripcion;
      body.precio = body.precio;
      body.urlImagen = body.urlImagen
  
      await Producto.findByIdAndUpdate(productId, body, {
        new: true,
      }).then((Producto) => {
        res.json({
          mensaje: `El producto: ${Producto.nombre} fue actualizado`,
          Producto,
        });
      });
  
  
    } else {
      res.status(400).json({ mensaje: "Ocurrio un error" });
    }
  };
  
module.exports = updateProductStore;