const {Vehiculo} = require("../vehiculo/vehiculo.model");
const fs = require("fs");

async function cuentaCobroResidentes() {
  
  try{  
    const upVehiculosResidentes = await Vehiculo.findAll({
      where: {
        tipo: 1
      }
    });

    if (upVehiculosResidentes){

      const fileName = 'temp/cuenta.txt';
        let line = `placa,  estancia(min), valor a pagar\n`;
      await fs.writeFile(fileName, line, ()=>{true});
      upVehiculosResidentes.forEach(async (vhcl) => {
        line = `${vhcl.placa}, ${vhcl.estancia}, ${vhcl.estancia * 0.02}\n`;
        await fs.appendFile(fileName, line, ()=>{true});
      });
    }

    return true;
    
  } catch(e){

    console.log(e);
    return false;
    
  }

}

module.exports = {cuentaCobroResidentes };