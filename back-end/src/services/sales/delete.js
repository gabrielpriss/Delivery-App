const { sales } = require('../../database/models');

const deleteId = async (id) => {
  const result = await sales.destroy({ where: { id } });

  return result;
};

module.exports = { deleteId };
