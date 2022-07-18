const { sales, users } = require('../../database/models');

const create = async (sale) => {
  const {
    userEmail, sellerEmail,
    totalPrice, deliveryAddress,
    deliveryNumber,
    status } = sale;

  const user = await users.findOne({ where: { email: userEmail } });

  const seller = await users.findOne({
    where: { email: sellerEmail } });

  if (!user || !seller) return { message: 'user ou seller não existe' };

  const result = await sales.create({
      userId: user.id,
      sellerId: seller.id,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status });

  return { result };
};

module.exports = { create };
