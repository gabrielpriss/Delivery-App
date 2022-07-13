const express = require('express');
const { getAllProductSalesController, createProductSalesController,
  getByIdProductSalesController, updateProductSalesController,
  deleteProductSalesController } = require('../controllers/salesProducts');

const productsSalesRoutes = express.Router();

productsSalesRoutes.get('/', getAllProductSalesController.getAll);
productsSalesRoutes.get('/:id', getByIdProductSalesController.getById);
productsSalesRoutes.put('/:id', updateProductSalesController.update);
productsSalesRoutes.post('/', createProductSalesController.create);
productsSalesRoutes.delete('/:id', deleteProductSalesController.deleteId);

module.exports = productsSalesRoutes;
