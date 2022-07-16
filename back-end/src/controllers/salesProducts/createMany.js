const service = require('../../services/salesProducts/createMany');

const createMany = async (req, res, next) => {
  try {
    const { saleId, itens } = req.body;

    const result = await service.createManySalesProducts(
      {
        saleId,
        itens,
      },
    );

    return res.status(201).json(result);
  } catch (err) {
  next(err);
}
};

module.exports = { createMany };