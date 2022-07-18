module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    urlImage: { type: DataTypes.STRING, field: 'url_image' },
  }, {
    timestamps: false,
  });

  return products;
}
