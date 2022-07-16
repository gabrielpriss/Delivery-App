const { salesProducts } = require('../../database/models');

const createManySalesProducts = async ({ saleId, itens }) => {
  console.log(saleId, itens);
  const formatItens = Object.values(itens)
    .map(({ productId, quantity }) => ({
        saleId,
        productId,
        quantity,
      }));

  await salesProducts.bulkCreate(formatItens);
  return saleId;
};

module.exports = { createManySalesProducts };