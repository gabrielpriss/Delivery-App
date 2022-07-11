"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("products",
      [
        {
          id: 1,
          name: 'cerveja',
          price: 3.40,
          "url_image": "https://static.clubeextra.com.br/img/uploads/1/224/22294224.jpg"
        },
        {
          id: 2,
          name: 'água',
          price: 1.20,
          "url_image": "https://static.clubeextra.com.br/img/uploads/1/224/22294224.jpg"
        },
      ], { timestamps: false}
    );
  },

  down: async(queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
}
