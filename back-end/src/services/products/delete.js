const { products } = require('../../database/models');

const deleteId = async (id) => {
  const result = await products.destroy({
    where: { id },
  });

  return result;
};

module.exports = { deleteId };
