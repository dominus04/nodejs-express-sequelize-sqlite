'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('persons',   [
      {
        name: 'Solange student',
        email: 'solange@email.com',
        cpf: '63058133022',
        active: true,
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Igor student',
        email: 'igor@email.com',
        cpf: '99018205028',
        active: true,
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Aline student',
        email: 'aline@email.com',
        cpf: '92797497066',
        active: true,
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fernando student',
        email: 'fernando@email.com',
        cpf: '17195730000',
        active: true,
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Roberta student',
        email: 'roberta@email.com',
        cpf: '77915012010',
        active: false,
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ricardo teacher',
        email: 'ricardo@email.com',
        cpf: '06946507061',
        active: true,
        role: 'teacher',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dine teacher',
        email: 'dine@email.com',
        cpf: '80941142078',
        active: true,
        role: 'teacher',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Marina teacher',
        email: 'marina@email.com',
        cpf: '17517762044',
        active: false,
        role: 'teacher',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
    , {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('persons', null, {});
  }
};
