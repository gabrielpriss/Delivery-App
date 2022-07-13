const service = require('../../services/salesProducts/create');

const create = async (req, res, next) => {
  try {
    const { saleId, quantity, productId } = req.body;

    const result = await service.create({ saleId, quantity, productId });

    if (!result) return res.status(400).json({ message: 'algo deu errado' });

    return res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { create };