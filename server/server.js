const express = require('express');
const controllers = require('./controllers')
const methodOverride = require('method-override')
const cors = require('cors')
const session = require('express-session')

require('dotenv').config();
//inicializacion de la base de datos
const app = express();
require('./database') ;

//puerto
const port =1313;
//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'balto',
    resave: true,
    saveUninitialized: true
}))


//Rutas
//post
app.post('/register',controllers.register)//registra al usuario
app.post('/login',controllers.login)//el usuario inicia sesion
app.post('/productos',controllers.addProductStore)//el admin añade productos a la bd
app.post('/products-cart', controllers.addToCart)//se agregan productos al carrito
app.post('/userInfo/',controllers.getUserData)//se obtiene informacion del usuario
//get
app.get('/getProduct/:productId',controllers.getProductFromStore)//se obtiene informacion del usuario
app.get('/products-cart',controllers.getProductsFromCart)//se llaman los productos en el carrito
app.get('/products',controllers.getProduct)//se obtiene un producto del carrito
//put
app.put('/productos/:productId',controllers.updateProductStore)//se actualiza un producto de la tienda
app.put('/products-cart/:productId', controllers.putProducts)//se actualiza un producto del carrito
//delete
app.delete('/productos',controllers.deleteProductStore)//se elimina un producto de la tienda
app.delete('/products-cart/:productId', controllers.deleteProductFromCart)//se elimina un producto del carrito
//consolelog servidor funcionando
app.listen(port,() => console.log("SERVER UP ON PORT: ",port));

module.exports = app;

