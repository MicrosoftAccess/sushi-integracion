
const register = require('./register')
const login = require('./login')

const getProduct = require('./getProduct')
const getUserData = require('./getUserData')
const addToCart = require('./addToCart')
const putProducts = require('./putProducts')
const deleteProductFromCart = require('./deleteProductFromCart')
const getProductsFromCart = require('./getProductsFromCart')
const addProductStore = require('./addProductStore')
const updateProductStore = require('./updateProductStore')
const deleteProductStore = require('./deleteProductStore')
const getProductFromStore = require('./getProductFromStore')
//añadir o eliminar productos a la base de datos
// const addProduct = require('./addProductStore')
// const deleteProduct = require('./deleteProductStore')
module.exports = {
    register,
    login,
    addToCart,
    getProduct,
    putProducts,
    deleteProductFromCart,
    getProductsFromCart,
    addProductStore,
    deleteProductStore,
    updateProductStore,
    getUserData,
    getProductFromStore
    

}
