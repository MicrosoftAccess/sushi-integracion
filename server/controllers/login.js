const bcrypt = require('bcryptjs')
const usuarios = require('../models/usuario')
const login = async(req,res) => {
    const { correo , contraseña } = req.body;
    usuarios.findOne({correo}).then((usuario)=>{
        if (!usuario){
            return res.json({mensaje:"Usuario no encontrado"})
        }
        bcrypt.compare(contraseña,usuario.contraseña).then((valid) =>{
            if (valid){
                const { id , nombre } = usuario;
                res.json({
                    mensaje:"Sesión iniciada con éxito",
                    usuario:{ id, nombre },
                })
            }
            else{
                return res.json({mensaje:"Contraseña inválida"})
            }
        })
    })
}
module.exports = login;