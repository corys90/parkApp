require("dotenv").config();

const express = require("express");
const configExpress = require("./config/express");
const routes = require("./routes");
const {sequelize} = require("./config/database");

const app = express();

configExpress(app);
routes(app);

module.exports = { app };