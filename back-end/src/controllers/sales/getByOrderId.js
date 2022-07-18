const service = require('../../services/sales/getByOrderId');

const getByOrderId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await service.getByOrderId(id);

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { getByOrderId };
