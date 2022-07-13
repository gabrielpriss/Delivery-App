const express = require('express');
const { createSalesController, getAllSalesController,
  getByIdSalesController, updateSalesController,
  deleteSalesController } = require('../controllers/sales');

const salesRoutes = express.Router();

salesRoutes.get('/', getAllSalesController.getAll);
salesRoutes.get('/:id', getByIdSalesController.getById);
salesRoutes.put('/:id', updateSalesController.update);
salesRoutes.post('/', createSalesController.create);
salesRoutes.delete('/:id', deleteSalesController.deleteId);

module.exports = salesRoutes;
