const { sales, products, users } = require('../../database/models');

const getByOrderId = async (id) => {
  const result = await sales.findOne({
    where: { id },
    include: [{ model: products, as: 'products' }] });

  const teste = result.products.map((product) => ({
      productId: product.id,
      name: product.name,
      quantity: product.salesProducts.quantity,
      price: product.price,
  }));

  const { name } = await users.findByPk(result.sellerId);

  return {
    ...result.dataValues,
    sellerName: name,
    products: teste,
  };
};

module.exports = { getByOrderId };
