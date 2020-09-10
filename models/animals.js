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
      // define association here
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
    altered: DataTypes.STRING,
    altereddate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Animals',
  });
  return Animals;
};