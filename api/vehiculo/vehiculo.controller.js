const { registraVehiculo, verificaVehiculo } = require("./vehiculo.service");

// Controladora de endpoint POST que registra vehcículos 
async function altaVehiculo(req, res) {

    if ((!req.body.placa) || (!req.body.tipo)){
        res.status(400).json({message:"Faltan datos para el registro de un vehículo."});
    }else{
        const existe = await verificaVehiculo(req.body.placa);
        if (existe){
            res.status(202).json({message:"Ya existe un vehículo con esa placa registrado."});
        }else{
            const vhcl = await registraVehiculo(req.body);
            res.status(200).json(vhcl);
        }
    }
}

module.exports = { altaVehiculo };