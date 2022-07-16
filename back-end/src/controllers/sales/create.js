const service = require('../../services/sales/create');

const create = async (req, res, next) => {
  try {
    const { userEmail, sellerEmail,
      totalPrice, deliveryAddress,
      deliveryNumber,
      status } = req.body;

    const { result, message } = await service.create({
      userEmail,
      sellerEmail,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status });

    if (message) return res.status(400).json({ message });

    return res.status(201).json({ saleId: result.id });    
  } catch (err) {
    next(err);
  }
};

module.exports = { create };
