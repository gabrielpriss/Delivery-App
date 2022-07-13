const service = require('../../services/salesProducts/update');

const update = async (req, res, next) => {
  try { 
    const { id } = req.params;
    const { saleId, quantity, productId } = req.body;

    const result = await service.update(id, {
      saleId, quantity, productId,
    });

    if (!result) return res.status(400).json({ message: 'não foi possivel atualizar' });

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { update };
