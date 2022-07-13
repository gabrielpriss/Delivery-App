const express = require('express');
const { createProductsController, deleteProductsController,
  getAllByIdProductsController, getAllProductsController,
  getByIdProductsController, updateProductsController,
} = require('../controllers/products');

const productsRoutes = express.Router();

productsRoutes.get('/', getAllProductsController.getAll);
productsRoutes.get('/:id', getByIdProductsController.getById);
productsRoutes.get('/order/:id', getAllByIdProductsController.getAllById);
productsRoutes.put('/:id', updateProductsController.update);
productsRoutes.post('/', createProductsController.create);
productsRoutes.delete('/:id', deleteProductsController.deleteId);

module.exports = productsRoutes;
