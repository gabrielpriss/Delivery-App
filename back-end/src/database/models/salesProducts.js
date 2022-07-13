module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    saleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "sales",
        key: "id",
      },
      field: 'sale_id',
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "products",
        key: "id",
      },
      field: 'product_id',
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
  },
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    underscored: true,
  });

  salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
      primaryKey: true,
    });

    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
      primaryKey: true,
    });
  }

  return salesProducts;
}