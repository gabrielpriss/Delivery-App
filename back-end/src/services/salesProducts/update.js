const { salesProducts } = require('../../database/models');

const update = async (id, body) => {
  const { saleId, quantity, productId } = body;
  const result = await salesProducts.update({
    saleId, quantity, productId,
  }, {
    where: { saleId: id },
  });

  return result;
};

module.exports = { update };
