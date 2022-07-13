const { sales } = require('../../database/models');

const getById = async (id) => {
  const result = await sales.findOne({ where: { id } });

  if (!result) return { message: 'produto não existe' };

  return { result };
};

module.exports = { getById };
