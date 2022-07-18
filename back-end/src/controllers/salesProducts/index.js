const getAllProductSalesController = require('./getAll');
const createProductSalesController = require('./create');
const getByIdProductSalesController = require('./getById');
const updateProductSalesController = require('./update');
const deleteProductSalesController = require('./delete');
const createManyProductsController = require('./createMany');

module.exports = {
  getAllProductSalesController,
  createProductSalesController,
  getByIdProductSalesController,
  updateProductSalesController,
  deleteProductSalesController,
  createManyProductsController,
};
