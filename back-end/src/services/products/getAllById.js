const { products } = require('../../database/models');

const getAllById = async (id) => {
  const result = await products.findAll({
    where: { id },
  });

  return result;
};

module.exports = { getAllById };
