const {DataTypes} = require("sequelize");
const {sequelize} = require("../../config/database");

const Vehiculo = sequelize.define('vehiculo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    placa: DataTypes.STRING,
    tipo: DataTypes.INTEGER,
    estancia: DataTypes.INTEGER
  });

  module.exports = { Vehiculo };
  