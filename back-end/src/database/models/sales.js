module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    sellerId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    totalPrice: DataTypes.DECIMAL,
    deliveryAdress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATA,
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