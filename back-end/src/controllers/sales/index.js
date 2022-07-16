const getAllSalesController = require('./getAll');
const createSalesController = require('./create');
const getByIdSalesController = require('./getById');
const updateSalesController = require('./update');
const deleteSalesController = require('./delete');
const getByOrderIdController = require('./getByOrderId');
const getAllBySellerIdController = require('./getAllBySellerId');

module.exports = {
  getAllSalesController,
  createSalesController,
  getByIdSalesController,
  updateSalesController,
  deleteSalesController,
  getByOrderIdController,
  getAllBySellerIdController,
};
