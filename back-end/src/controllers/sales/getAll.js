const service = require('../../services/sales/getAll');

const getAll = async (_req, res, next) => {
  try {
    const sales = await service.getAll();

    return res.status(200).json(sales);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll };
