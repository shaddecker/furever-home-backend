'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adoptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adoptions.belongsTo(models.Animals, { foreignKey: "animalid" });
    }
  };
  Adoptions.init({
    animalid: DataTypes.INTEGER,
    status: DataTypes.STRING,
    fullname: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    phone: DataTypes.STRING,
    vetname: DataTypes.STRING,
    vetaddress: DataTypes.STRING,
    vetphone: DataTypes.STRING,
    vetemail: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Adoptions',
  });
  return Adoptions;
};