"use strict";
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("users",
      [
        {
          id: 1,
          name: 'Admin',
          email: 'admin@teste.com',
          password: '21232f297a57a5a743894a0e4a801fc3',
          role: 'admin'
        },
        {
          id: 2,
          name: 'Seller',
          email: 'seller@teste.com',
          password: '64c9ac2bb5fe46c3ac32844bb97be6bc',
          role: 'seller'
        },
        {
          id: 3,
          name: 'Customer',
          email: 'customer@teste.com',
          password: '91ec1f9324753048c0096d036a694f86',
          role: 'custumer'
        }
      ], { timestamps: false}
    );
  },
  down: async(queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
}