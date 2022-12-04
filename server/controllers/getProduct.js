const productos = require('../models/productos')

const getProduct = async( req,res ) => {
    const products = await productos.find();
    if(products) {
        res.json({ products })
    }else{
        res.json({ mensaje: "Producto no valido"})
    }
};

module.exports = getProduct;