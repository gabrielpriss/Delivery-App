const express = require('express');
const getAllProductsController = require('../controllers/products/getAll')

const productsRoutes = express.Router();

productsRoutes.post('/', getAllProductsController.getAll);

module.exports = productsRoutes;
