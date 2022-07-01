const {Vehiculo} = require("../vehiculo/vehiculo.model");

async function registraVehiculo(vehiculo) {
  const newVehiculo = await Vehiculo.create(vehiculo);
  return newVehiculo;
}

async function verificaVehiculo(plc) {
  const newVehiculo = await Vehiculo.findOne({ where: { placa: plc } });
  if (newVehiculo === null){
    return false;
  }else{
    return true;
  }
}

module.exports = {registraVehiculo, verificaVehiculo};