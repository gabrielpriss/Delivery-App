module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      field: 'user_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      field: 'seller_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
  },
    totalPrice: { type: DataTypes.DECIMAL, field: 'total_price' },
    deliveryAddress: { type: DataTypes.STRING, field: 'delivery_address'},
    deliveryNumber: { type: DataTypes.STRING, field: 'delivery_number' },
    saleDate:  { type: DataTypes.DATE, field: 'sale_date' },
    status: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  sales.associate = (models) => {
    sales.belongsTo(models.users,
      { foreignKey: 'userId', as: 'users' },
      { foreignKey: 'sellerId', as: 'sellers' },
    );
  }

  return sales;
}