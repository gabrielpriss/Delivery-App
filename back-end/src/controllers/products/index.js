const getAllProductsController = require('./getAll');
const createProductsController = require('./create');
const getByIdProductsController = require('./getById');
const getAllByIdProductsController = require('./getAllById');
const updateProductsController = require('./update');
const deleteProductsController = require('./delete');

module.exports = {
  getAllProductsController,
  createProductsController,
  getByIdProductsController,
  getAllByIdProductsController,
  updateProductsController,
  deleteProductsController,
};
