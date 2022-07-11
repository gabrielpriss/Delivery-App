module.expores = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('selesProducts', {
    quantity: DataTypes.INTEGER,
  });

  salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });

    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  }

  return salesProducts;
}