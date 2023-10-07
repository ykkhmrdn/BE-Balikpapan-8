const express = require('express')
const productRoute = express.Router();
const productController = require('../controllers/productsController');

productRoute.get('/index', productController.getAllProduct)
productRoute.get('/products', productController.getAllProduct)
productRoute.get('/detail-products.html', productController.getProductById)
productRoute.get('/productsByType', productController.getProductsByType);
productRoute.get('/renderProductsHTML', productController.renderProductsHTML);






module.exports = { productRoute }