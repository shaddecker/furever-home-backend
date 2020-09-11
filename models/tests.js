'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tests.belongsTo(models.Animals, { foreignKey: "animalid" });
    }
  };
  Tests.init({
    animalid: DataTypes.INTEGER,
    felineflv: DataTypes.STRING,
    felineid: DataTypes.STRING,
    canineheartworm: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tests',
  });
  return Tests;
};