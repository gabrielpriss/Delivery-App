const express = require('express');
const getAllProductsController = require('../controllers/products/getAll');
const createProductsController = require('../controllers/products/create');
const getByIdProductsController = require('../controllers/products/getById');
const productsRoutes = express.Router();

productsRoutes.get('/', getAllProductsController.getAll);
productsRoutes.get('/:id', getByIdProductsController.getById);
productsRoutes.post('/', createProductsController.create);

module.exports = productsRoutes;
