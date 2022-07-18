const { products } = require('../../database/models');

const create = async (product) => {
  console.log('🚀 ~ file: create.js ~ line 5 ~ create ~ \'entrei\'', 'entrei');
  const result = await products.create(product);
  return result;
};

module.exports = { create };
