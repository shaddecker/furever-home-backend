'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vaccinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      animalid: {
        type: Sequelize.INTEGER
      },
      rabies: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      rabiesdate: {
        type: Sequelize.DATE,
      },
      bordetella: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      bordetelladate: {
        type: Sequelize.DATE
      },
      distemper: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      distemperdate: {
        type: Sequelize.DATE
      },
      hepatitis: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      hepatitisdate: {
        type: Sequelize.DATE
      },
      parvovirus: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      parvovirusdate: {
        type: Sequelize.DATE
      },
      parainfluenza: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      parainfluenzadate: {
        type: Sequelize.DATE
      },
      leptospirosis: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      leptospirosisdate: {
        type: Sequelize.DATE
      },
      coronavirus: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      coronavirusdate: {
        type: Sequelize.DATE
      },
      lyme: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      lymedate: {
        type: Sequelize.DATE
      },
      felineluekemia: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      felineluekemiadate: {
        type: Sequelize.DATE
      },
      rhinotracheitis: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      rhinotracheitisdate: {
        type: Sequelize.DATE
      },
      calicivirus: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      calicivirusdate: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Vaccinations');
  }
};