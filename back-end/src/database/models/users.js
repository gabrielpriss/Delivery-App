module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    timestamps: false,
  });

  users.associate = (models) => {
    users.hasMany(models.sales,
      { foreignKey: 'id', as: 'users' },
    );
  };

  return users;
}