const { cuentaCobroResidentes } = require("./cuenta.service");

async function reporte(req, res) {

    const resultado = await cuentaCobroResidentes();

    if (resultado){

        res.status(200).json({message:"Listado ejecutado con exito.", listado: resultado});

    }else{

        res.status(400).json({message:"Se pesentó un problema en el proceso de listado."});

    }
}

module.exports = { reporte };