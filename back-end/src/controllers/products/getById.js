const service = require('../../services/products/getById');

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { result, message } = await service.getById(id);

    if (message) return res.status(404).json({ message });

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { getById };
