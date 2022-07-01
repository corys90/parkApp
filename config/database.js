
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("parkapp", "root", "root",{
  host:'localhost',
  dialect: 'mysql',
  logging: true
});

module.exports = {sequelize};
