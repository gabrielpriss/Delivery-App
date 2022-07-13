const service = require('../../services/products/create');

const create = async (req, res, next) => {
  try {
    const { name, price, urlImage } = req.body;

    const result = await service.create({ name, price, urlImage });

    if (!result) return res.status(400).json({ message: 'algo deu errado' });

    return res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { create };
