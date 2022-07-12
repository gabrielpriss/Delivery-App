"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sales", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      field: 'user_id'
    },
    sellerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: 'seller_id'
    },
    totalPrice: {
      type: Sequelize.DECIMAL,
      field: 'total_price'
    },
    deliveryAddress: {
      type: Sequelize.STRING,
      field: 'delivery_address'
    },
    deliveryNumber: {
      type: Sequelize.STRING,
      field: 'delivery_number'
    },
    saleDate: {
      type: Sequelize.DATE,
      field: 'sale_dale'
    },
    status: {
      type: Sequelize.STRING,
    }
  });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("sales");
  }
}