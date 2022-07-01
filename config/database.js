const {Sequelize} = require("sequelize");

const host = process.env.host || "localhost";
const DBName = process.env.DBName;
const User = process.env.User;
const Pass = process.env.Pass;

const sequelize = new Sequelize(DBName, User, Pass,{
  host:host,
  dialect: 'mysql',
  logging: true
});

module.exports = {sequelize};
