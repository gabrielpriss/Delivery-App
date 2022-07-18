const { salesProducts } = require('../../database/models');

const getAll = async () => {
  const result = await salesProducts.findAll();

  return result;
};

module.exports = { getAll };
