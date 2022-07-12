const express = require('express');
const getAllProductsController = require('../controllers/products/getAll');
const createProductsController = require('../controllers/products/create');
const getByIdProductsController = require('../controllers/products/getById');
const getAllByIdProductsController = require('../controllers/products/getAllById');
const updateProductsController = require('../controllers/products/update');
const deleteProductsController = require('../controllers/products/delete');

const productsRoutes = express.Router();

productsRoutes.get('/', getAllProductsController.getAll);
productsRoutes.get('/:id', getByIdProductsController.getById);
productsRoutes.get('/order/:id', getAllByIdProductsController.getAllById);
productsRoutes.put('/:id', updateProductsController.update);
productsRoutes.post('/', createProductsController.create);
productsRoutes.delete('/:id', deleteProductsController.deleteId);

module.exports = productsRoutes;
