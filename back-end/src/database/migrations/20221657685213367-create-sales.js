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
      field: 'user_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    sellerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        field: 'seller_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    totalPrice: {
      type: Sequelize.DECIMAL(6, 2),
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
      defaultValue: Sequelize.fn('now'),
      field: 'sale_date'
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