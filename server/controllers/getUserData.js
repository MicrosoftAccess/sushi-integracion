const usuario = require('../models/usuario')
const getUserData = async( req,res ) => {
    const user = await usuario.findById(req.body.id);
    if(user) {
        res.json({ user })
    }else{
        res.json({ mensaje: "No existe usuario"})
    }
};
module.exports = getUserData;