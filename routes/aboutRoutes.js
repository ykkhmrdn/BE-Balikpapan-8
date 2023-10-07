const express = require('express')
const aboutRoute = express.Router();
const aboutController = require('../controllers/aboutController')

aboutRoute.get('/about', aboutController.getAllAbout)


module.exports = { aboutRoute }