const vehiculo = require ('./api/vehiculo');
const parqueadero = require('./api/parqueo');
const reinicio = require('./api/reinicio');
const cuenta = require('./api/cuenta');

//const authLocal = require('./auth/local');

function routes (app) {
  app.use('/api/vehiculo/registro', vehiculo);
  app.use('/api/parqueo/registro', parqueadero);
  app.use('/api/reinicio/mes', reinicio);
  app.use('/api/cuenta/cobro', cuenta);

  //Endpoint para credenciales y rol de acceso
  //app.use('/auth/local', authLocal);
}

module.exports = routes;