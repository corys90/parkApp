const { app } = require("./app");
const {sequelize} = require("./config/database");

const port = process.env.PORT || 65535;

app.listen(port, async () => {
  console.log(`Servidor escuchando en http://localhost:${port}/`);

  try{
    await sequelize.authenticate();
    console.log(`Conexión a BD exitosa!!!`);
    await sequelize.sync({force: false});
  }catch(e){
    console.log(`No fue posible conectar a la BD ${e}`);
  }
});

module.exports = app;