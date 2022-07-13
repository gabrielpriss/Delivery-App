"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("sales",
      [
        {
          id: 1,
          "user_id": 3,
          "seller_id": 2,
          "total_price": 1.20,
          "delivery_address": "rua dos bobos",
          "delivery_number": "0",
          "sale_date": '2022.02.11',
          status: "Pendente"
        },
        {
          id: 2,
          "user_id": 3,
          "seller_id": 2,
          "total_price": 10,
          "delivery_address": "rua dos bobos",
          "delivery_number": "0",
          "sale_date": '2022-07-13',
          status: "Preparando"
        },
        {
          id: 3,
          "user_id": 3,
          "seller_id": 2,
          "total_price": 2.99,
          "delivery_address": "rua dos bobos",
          "delivery_number": "0",
          "sale_date": '2022-07-13',
          status: "Em Trânsito"
        },
        {
          id: 4,
          "user_id": 3,
          "seller_id": 2,
          "total_price": 3,
          "delivery_address": "rua dos bobos",
          "delivery_number": "0",
          "sale_date": '2022-07-13',
          status: "Entregue"
        },
        {
          id: 5,
          "user_id": 3,
          "seller_id": 2,
          "total_price": 4.60,
          "delivery_address": "rua dos bobos",
          "delivery_number": "0",
          "sale_date": '2022-07-13',
          status: "Pendente"
        },
      ], { timestamps: false}
    );
  },

  down: async(queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
}
