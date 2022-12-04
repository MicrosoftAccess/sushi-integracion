const bcrypt = require('bcryptjs')
const Usuario = require('../models/usuario')

const register = async(req, res) =>{
    
    const {nombre, correo, admin,contraseña,direccion,comuna,
        provincia,
        region,
        napartamento,nacimiento,rut,sexo,telefono} = req.body;
    Usuario.findOne({correo}).then((usuario)=>{
        if(usuario){
            return res.json({mensaje:"Ese correo ya está en uso"});
        }else if(!nombre || !correo || !contraseña || !direccion || !nacimiento || !rut || !sexo || !telefono){
            return res.json({mensaje:"Complete todos los campos"})
        }else{
            bcrypt.hash(contraseña,10,(error,constraseñahasheada) => {
                if(error)res.json({error});
                else{
                    const nuevoUsuario = new Usuario({
                        nombre,
                        correo,
                        admin,
                        contraseña: constraseñahasheada,
                        direccion,
                        comuna,
                        provincia,
                        region,
                        napartamento,
                        nacimiento,
                        rut,
                        sexo,
                        telefono,
                    });
                    nuevoUsuario
                    .save()
                    .then((usuario) => {res.json({mensaje:"Usuario creado ", usuario})
                    })
                    .catch((error) => console.error("Error"));  
                    }    
            })
        }
    })
}

module.exports = register;
