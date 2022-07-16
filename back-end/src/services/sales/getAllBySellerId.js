const { sales } = require('../../database/models');

const getAllBySellerId = async (id) => sales.findAll({
  where: {
    sellerId: id,
  },
});

module.exports = { getAllBySellerId };
