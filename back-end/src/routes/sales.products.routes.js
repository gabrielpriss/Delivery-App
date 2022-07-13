const express = require('express');
const getAllproductSalesController = require('../controllers/salesProducts/getAll');
const createproductSalesController = require('../controllers/salesProducts/create');
const getByIdproductSalesController = require('../controllers/salesProducts/getById');
const updateproductSalesController = require('../controllers/salesProducts/update');
const deleteproductSalesController = require('../controllers/salesProducts/delete');

const productsSalesRoutes = express.Router();

productsSalesRoutes.get('/', getAllproductSalesController.getAll);
productsSalesRoutes.get('/:id', getByIdproductSalesController.getById);
productsSalesRoutes.put('/:id', updateproductSalesController.update);
productsSalesRoutes.post('/', createproductSalesController.create);
productsSalesRoutes.delete('/:id', deleteproductSalesController.deleteId);

module.exports = productsSalesRoutes;
