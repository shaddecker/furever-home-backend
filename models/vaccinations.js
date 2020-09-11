'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vaccinations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vaccinations.belongsTo(models.Animals, { foreignKey: "animalid" });
    }
  };
  Vaccinations.init({
    animalid: DataTypes.INTEGER,
    rabies: DataTypes.BOOLEAN,
    rabiesdate: DataTypes.DATE,
    bordetella: DataTypes.BOOLEAN,
    bordetelladate: DataTypes.DATE,
    distemper: DataTypes.BOOLEAN,
    distemperdate: DataTypes.DATE,
    hepatitis: DataTypes.BOOLEAN,
    hepatitisdate: DataTypes.DATE,
    parvovirus: DataTypes.BOOLEAN,
    parvovirusdate: DataTypes.DATE,
    parainfluenza: DataTypes.BOOLEAN,
    parainfluenzadate: DataTypes.DATE,
    leptospirosis: DataTypes.BOOLEAN,
    leptospirosisdate: DataTypes.DATE,
    coronavirus: DataTypes.BOOLEAN,
    coronavirusdate: DataTypes.DATE,
    lyme: DataTypes.BOOLEAN,
    lymedate: DataTypes.DATE,
    felineluekemia: DataTypes.BOOLEAN,
    felineluekemiadate: DataTypes.DATE,
    rhinotracheitis: DataTypes.BOOLEAN,
    rhinotracheitisdate: DataTypes.DATE,
    calicivirus: DataTypes.BOOLEAN,
    calicivirusdate: DataTypes.DATE,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Vaccinations',
  });
  return Vaccinations;
};