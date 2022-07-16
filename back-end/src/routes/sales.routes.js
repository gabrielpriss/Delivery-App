const express = require('express');
const { createSalesController, getAllSalesController,
  getByIdSalesController, updateSalesController,
  deleteSalesController, getByOrderIdController,
  getAllBySellerIdController } = require('../controllers/sales');
const { auth } = require('../middlewares/auth');

const salesRoutes = express.Router();

// Routes
salesRoutes.get('/', getAllSalesController.getAll);

salesRoutes.get('/:id', getByIdSalesController.getById);

salesRoutes.get('/seller/:id', getAllBySellerIdController.getAllBySellerId);

salesRoutes.get('/order/:id',
  getByOrderIdController.getByOrderId);

salesRoutes.put('/:id', updateSalesController.update);

salesRoutes.post('/', auth, createSalesController.create);

salesRoutes.delete('/:id', deleteSalesController.deleteId);
// ------

module.exports = salesRoutes;
