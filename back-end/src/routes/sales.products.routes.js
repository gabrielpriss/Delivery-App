const express = require('express');
const { getAllProductSalesController, createProductSalesController,
  getByIdProductSalesController, updateProductSalesController,
  deleteProductSalesController, createManyProductsController,
} = require('../controllers/salesProducts');
const { auth } = require('../middlewares/auth');

const productsSalesRoutes = express.Router();

productsSalesRoutes.get('/', getAllProductSalesController.getAll);
productsSalesRoutes.get('/:id', getByIdProductSalesController.getById);
productsSalesRoutes.put('/:id', updateProductSalesController.update);
productsSalesRoutes.post('/', createProductSalesController.create);
productsSalesRoutes.delete('/:id', deleteProductSalesController.deleteId);
productsSalesRoutes.post('/many', auth, createManyProductsController.createMany);

module.exports = productsSalesRoutes;
