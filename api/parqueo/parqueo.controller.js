const { verificaSiEsta, registraIngreso, actualizaIngreso, getTipoVehiculo } = require("./parqueo.service");

async function ingresoVehiculo(req, res){
    if ((!req.body.placa)){
        res.status(400).json({message:"Faltan datos para la asignación de un parqueadero a su vehículo."});
    }else{
        const tipo = await getTipoVehiculo(req.body.placa);
        const carro = await verificaSiEsta(req.body.placa);
        if (carro === null){
            const vhcl = await registraIngreso(req.body.placa, tipo);
            res.status(200).json(vhcl);  
        }else{
            console.log("Fecha de salida : ", carro.fechaSalida);
            if (carro.fechaSalida === null){
                res.status(202).json({message:"Ya existe un vehículo con esa placa ingresado al parqueadero."});
            }else{
                const vhcl = await registraIngreso(req.body.placa, tipo);
                res.status(200).json(vhcl);  
            }
        }
    }
}

async function actualizaParqueo(req, res){
    if ((!req.body.placa)){
        res.status(400).json({message:"Falta información del vehículo para la asignación de un parqueadero."});
    }else{
        const existe = await verificaSiEsta(req.body.placa);
        if (existe){
            const respuesta = await actualizaIngreso(req.body.placa);
            res.status(200).json(respuesta);
        }else{
            res.status(202).json({message:"No existe un vehículo con esa placa ingresado al parqueadero."});
        }
    }
}

module.exports = { ingresoVehiculo,  actualizaParqueo };