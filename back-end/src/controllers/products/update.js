const service = require('../../services/products/update');

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, urlImage } = req.body;

    const result = await service.update(id, { name, price, urlImage });

    if (!result) return res.status(400).json({ message: 'update falhou' });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { update };
