"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users",
      [
        {
          id: 1,
          name: 'Admin',
          email: 'admin@teste.com',
          password: '123123',
          role: 'admin'
        },
        {
          id: 2,
          name: 'noAdmin',
          email: 'noadmin@teste.com',
          password: '321321',
          role: 'noAdmin'
        },
      ], { timestamps: false}
    );
  },

  down: async(queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
}
