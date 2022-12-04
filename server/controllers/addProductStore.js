
const Producto = require('../models/productos')
const addProductStore = async(req, res) =>{
    const {nombre, descripcion, precio,urlImagen} = req.body;
    Producto.findOne({nombre}).then((producto)=>{
        if(producto){
            return res.json({mensaje:"producto existente"});
        }else if(!nombre || !descripcion ||!precio || !urlImagen){
            return res.json({mensaje:"Complete todos los campos"})
        }else{const nuevoProducto = new Producto({
                        nombre,
                        descripcion,
                        precio,
                        urlImagen,
                        agregado:false,
                    });
                    nuevoProducto
                    .save()
                    .then((producto) => {res.json({mensaje:"Producto agregado ", producto})
                    })
                    .catch((error) => console.error("error"));
        
        }
    })
}
module.exports = addProductStore;