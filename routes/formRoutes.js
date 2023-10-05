const express = require('express')
const formRoute = express.Router();
const formController = require('../controllers/formController')



formRoute.get('/dataform', formController.getAllForm)
formRoute.post('/index', formController.createForm)


module.exports = { formRoute }