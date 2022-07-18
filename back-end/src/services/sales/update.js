const { sales, users } = require('../../database/models');

const update = async (id, body) => {
  const { userEmail, sellerEmail, totalPrice,
    deliveryAddress, deliveryNumber, saleDate, status } = body;

  const user = await users.findOne({ where: { email: userEmail } });

  const seller = await users.findOne({ where: { email: sellerEmail } });

  if (!user || !seller) return { message: 'não foi possivel atualizar' };

  const result = await sales.update({
    userId: user.id,
    sellerId: seller.id,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status,
  }, { where: { id } });

  return result;
};

module.exports = { update };
