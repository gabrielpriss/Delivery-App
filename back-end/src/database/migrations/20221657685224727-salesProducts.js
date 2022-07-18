"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("salesProducts", {
    saleId: {
      allowNull: false,
      type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id",
        },
        field: 'product_id',
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    quantity: {
      type: Sequelize.INTEGER,
    }
  }, {
    timestamps: false,
    underscored: true,
  });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("salesProducts");
  }
}