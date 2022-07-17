const service = require('../../services/sales/updateStatus');

const updateStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await service.updateStatus(id, status);

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { updateStatus };