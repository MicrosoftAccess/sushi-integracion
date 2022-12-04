const productos = require('../models/productos')

const getProductFromStore = async( req,res ) => {
    const product = await productos.findById(req.params.productId);
    if(product) {
        res.json({ product })
        console.log(res.json);
    }else{
        res.json({ mensaje: "Producto no valido"})
    }
};

module.exports = getProductFromStore;