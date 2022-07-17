const service = require('../../services/sales/getAllBySellerId');

const getAllBySellerId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await service.getAllBySellerId(id);

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllBySellerId };