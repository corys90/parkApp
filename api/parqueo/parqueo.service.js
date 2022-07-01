const { Parqueo} = require("./parqueo.model");
const { Vehiculo } = require("../vehiculo/vehiculo.model");
const tiempo = require("../../util/fechas");

async function registraIngreso(plc, tp) {
  const newParqeuo = {
    placa: plc,
    tipo: tp,
    fechaIngreso: new Date().toLocaleDateString(),
    horaIngreso: new Date().toLocaleTimeString()
  };  
  const newVehiculo = await Parqueo.create(newParqeuo);
  return newVehiculo;
}

async function getVehiculo(plc) {
    const auto = await Vehiculo.findOne({ where: { placa: plc } });
    return auto;
}

async function verificaSiEsta(plc) {
    const newParqueo = await Parqueo.findOne({ where: { placa: plc, fechaSalida: null  } });
    return newParqueo;
}

async function actualizaIngreso(plc) {

    let totEstancia;
    let cuenta;

    const fsalida = new Date().toLocaleDateString();
    const hsalida = new Date().toLocaleTimeString();
    const parqueo = await verificaSiEsta(plc);
    const newParqueo = await Parqueo.update({ fechaSalida: fsalida, horaSalida: hsalida }, {
        where: {
          placa: plc,
          fechaSalida: null
        }
    });   

    const estancia = (tiempo.restarFechas(parqueo.fechaIngreso, fsalida) * 24 * 60) + (tiempo.difHorasAminutos(parqueo.horaIngreso, hsalida));
    const vhcl = await getVehiculo(plc);

    if (vhcl === null){
        cuenta = (0.2 * estancia);
        return ({"Mensaje" : "Importe a pagar ",  valor : cuenta });
    }else{

        if (vhcl.tipo === 0){
            totEstancia = estancia
        }else{
            totEstancia = vhcl.estancia + estancia;
        }
    
        const upVehiculo = await Vehiculo.update({ estancia: totEstancia }, {
            where: {
                placa: plc
            }
        });    
    
        return ({"Mensaje" : "Salida de vehículo registrada", vehiculo: vhcl});
    }
}


async function getTipoVehiculo(plc) {
    const auto = await Vehiculo.findOne({ where: { placa: plc } });
    if (auto === null){
        return 2; // Es un auto no registrado en la base de datos. 0 - oficial, 1 - residente, 2 - no residnete
    }else{
        return auto.tipo;
    }
}

module.exports = {verificaSiEsta, registraIngreso, actualizaIngreso, getTipoVehiculo};