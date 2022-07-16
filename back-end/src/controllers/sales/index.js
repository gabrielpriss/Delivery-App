const getAllSalesController = require('./getAll');
const createSalesController = require('./create');
const getByIdSalesController = require('./getById');
const updateSalesController = require('./update');
const deleteSalesController = require('./delete');
const getByOrderIdController = require('./getByOrderId');

module.exports = {
  getAllSalesController,
  createSalesController,
  getByIdSalesController,
  updateSalesController,
  deleteSalesController,
  getByOrderIdController,
};
