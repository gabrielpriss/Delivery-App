const { products } = require('../../database/models');

const update = async (id, body) => {
  const result = await products.update(body, {
    where: { id },
  });

  return result;
};

module.exports = { update };
