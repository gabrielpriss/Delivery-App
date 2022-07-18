const service = require('../../services/sales/update');

const update = async (req, res, next) => {
  try { 
    const { id } = req.params;
    const { userEmail, sellerEmail, totalPrice, deliveryAddress,
      deliveryNumber, saleDate, status } = req.body;

    const { result, message } = await service.update(id, {
      userEmail,
      sellerEmail,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate,
      status });

    if (message) return res.status(400).json({ message });

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { update };
