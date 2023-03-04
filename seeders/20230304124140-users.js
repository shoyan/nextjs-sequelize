'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'johndoe1',
        firstName: 'John',
        lastName: 'Doe 1',
        email: 'example1@example.com',
        status: 1,
        gender: 'f',
        phoneNumber: '0239239249239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};