const express = require('express')
const productRoute = express.Router();
const productController = require('../controllers/productsController');

productRoute.get('/index', productController.getAllProduct)
productRoute.get('/views/products', productController.getAllProduct)
productRoute.get('/views/detail-products.html', productController.getProductById)
productRoute.get('/views/productsByType', productController.getProductsByType);
productRoute.get('/views/renderProductsHTML', productController.renderProductsHTML);
<<<<<<< HEAD
=======
productRoute.get('/views/productsByName/:name', productController.getProductsByName);
productRoute.get('/views/productsByType/:type', productController.getProductsByType2);


>>>>>>> 5fe1f9446f891a0a4d144dffcd3fd3029d6e37ee



module.exports = { productRoute }