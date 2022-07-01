const {Vehiculo} = require("../vehiculo/vehiculo.model");
const {Parqueo} = require("./reinicio.model");

async function reinicioMes() {
  
  try{

    const newVehiculo = await Parqueo.destroy({
      where: {
        tipo: 0
      }
    });
  
    const upVehiculosEstancias = await Vehiculo.update({ estancia: 0 }, {
      where: {
        tipo: 1
      }
    });

    return true;

  }catch(e){

    return false;
    
  }



  return newVehiculo;
}

module.exports = {reinicioMes };