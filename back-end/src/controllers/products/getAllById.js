const service = require('../../services/products/getAllById');

const getAllById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await service.getAllById(id);

    if (!result) return res.status(400).json({ messagem: 'nenhum produto encontrado' });

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllById };
