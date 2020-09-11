'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Animals.hasMany(models.Tests, { foreignKey: "animalid" });
      Animals.hasMany(models.Adoptions, { foreignKey: "animalid" });
    }
  };
  Animals.init({
    type: DataTypes.STRING,
    breed: DataTypes.STRING,
    name: DataTypes.STRING,
    coatlength: DataTypes.STRING,
    color: DataTypes.STRING,
    age: DataTypes.STRING,
    sex: DataTypes.STRING,
    status: DataTypes.STRING,
    altered: DataTypes.BOOLEAN,
    altereddate: DataTypes.DATE,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Animals',
  });
  return Animals;
};