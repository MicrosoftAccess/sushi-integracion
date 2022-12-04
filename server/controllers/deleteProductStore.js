const Producto = require('../models/productos')

const deleteProductStore = async(req, res) =>{
    const {nombre} = req.body;
    
    Producto.findOneAndDelete({nombre}).then((producto)=>{
        if(producto){

            return res.json({mensaje:"El producto ha sido eliminado"});
        }else{
            return res.json({mensaje:"El producto no existe"})
        }
                 
                    
    })
}
module.exports = deleteProductStore;