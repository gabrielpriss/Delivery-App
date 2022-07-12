const { products } = require('../../database/models');

const getById = async (id) => {
  const result = await products.findByPk(id);

  if (!result) return { message: 'produto não existe' };

  return { result };
};

module.exports = { getById };