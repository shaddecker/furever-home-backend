'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Adoptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      animalid: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zipcode: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      vetname: {
        type: Sequelize.STRING
      },
      vetaddress: {
        type: Sequelize.STRING
      },
      vetphone: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Adoptions');
  }
};