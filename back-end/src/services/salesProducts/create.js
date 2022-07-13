const { salesProducts } = require('../../database/models');

const create = async (body) => {
  const { saleId, quantity, productId } = body;

  const result = await salesProducts.create({
    saleId, quantity, productId,
  });

  return result;
};

module.exports = { create };