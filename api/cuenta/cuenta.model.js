const {sequelize} = require("../../config/database");
const { DataTypes } = require("sequelize");

const Parqueo = sequelize.define('parqueos', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    placa: DataTypes.STRING,
    tipo: DataTypes.INTEGER,
    fechaIngreso: DataTypes.STRING,
    horaIngreso: DataTypes.STRING,
    fechaSalida: DataTypes.STRING,
    horaSalida: DataTypes.STRING
  });

  module.exports = { Parqueo };