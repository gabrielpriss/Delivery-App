const service = require('../../services/products/getAll');

const getAll = async (_req, res, next) => {
  try {
    const products = await service.getAll();

    return res.status(201).json(products);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll };