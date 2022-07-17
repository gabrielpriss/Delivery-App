const { sales } = require('../../database/models');

const updateStatus = async (id, status) => {
  console.log('entrei');
  await sales.update({ status }, { where: { id } });
};

module.exports = { updateStatus };