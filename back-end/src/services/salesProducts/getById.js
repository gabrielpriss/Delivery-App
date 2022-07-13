const { salesProducts } = require('../../database/models');

const getById = async (id) => {
  const result = await salesProducts.findOne(
    {
      where: { saleId: id },
    },
  );

  if (!result) return { message: 'produto não existe' };

  return { result };
};

module.exports = { getById };
