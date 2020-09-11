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
        type: Sequelize.BOOLEAN
      },
      rabiesdate: {
        type: Sequelize.DATE
      },
      bordetella: {
        type: Sequelize.BOOLEAN
      },
      bordetelladate: {
        type: Sequelize.DATE
      },
      distemper: {
        type: Sequelize.BOOLEAN
      },
      distemperdate: {
        type: Sequelize.DATE
      },
      hepatitis: {
        type: Sequelize.BOOLEAN
      },
      hepatitisdate: {
        type: Sequelize.DATE
      },
      parvovirus: {
        type: Sequelize.BOOLEAN
      },
      parvovirusdate: {
        type: Sequelize.DATE
      },
      parainfluenza: {
        type: Sequelize.BOOLEAN
      },
      parainfluenzadate: {
        type: Sequelize.DATE
      },
      leptospirosis: {
        type: Sequelize.BOOLEAN
      },
      leptospirosisdate: {
        type: Sequelize.DATE
      },
      coronavirus: {
        type: Sequelize.BOOLEAN
      },
      coronavirusdate: {
        type: Sequelize.DATE
      },
      lyme: {
        type: Sequelize.BOOLEAN
      },
      lymedate: {
        type: Sequelize.DATE
      },
      felineluekemia: {
        type: Sequelize.BOOLEAN
      },
      felineluekemiadate: {
        type: Sequelize.DATE
      },
      rhinotracheitis: {
        type: Sequelize.BOOLEAN
      },
      rhinotracheitisdate: {
        type: Sequelize.DATE
      },
      calicivirus: {
        type: Sequelize.BOOLEAN
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