const { reinicioMes } = require("./reinicio.service");

async function reinicio(req, res) {

    const resultado = await reinicioMes();

    if (resultado){

        res.status(200).json({message:"Reinicio ejecutado con exito."});

    }else{

        res.status(400).json({message:"Se pesentó un problema en el proceso de reinicio."});

    }
}

module.exports = { reinicio };