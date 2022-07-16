const express = require('express');
const { createSalesController, getAllSalesController,
  getByIdSalesController, updateSalesController,
  deleteSalesController } = require('../controllers/sales');
const { auth } = require('../middlewares/auth');

const salesRoutes = express.Router();

salesRoutes.get('/', getAllSalesController.getAll);
salesRoutes.get('/:id', getByIdSalesController.getById);
salesRoutes.put('/:id', updateSalesController.update);
salesRoutes.post('/', auth, createSalesController.create);
salesRoutes.delete('/:id', deleteSalesController.deleteId);

module.exports = salesRoutes;
