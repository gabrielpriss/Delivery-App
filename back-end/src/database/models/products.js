module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECILAMAL,
    urlImage: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return products;
}