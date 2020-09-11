'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      animalid: {
        allowNull: false,        
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      felineflv: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      felineid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      canineheartworm: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('tests');
  }
};