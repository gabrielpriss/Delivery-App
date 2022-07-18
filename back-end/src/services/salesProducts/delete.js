const { salesProducts } = require('../../database/models');

const deleteId = async (saleId) => {
  const result = await salesProducts.destroy({
    where: { saleId },
  });

  return result;
};

module.exports = { deleteId };
