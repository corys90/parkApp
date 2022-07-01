function restarFechas(fechaInicial, fechafinal){

    // formato mes/dia/año
    const fi = new Date(fechaInicial);
    const ff = new Date(fechafinal);

    const dif = Math.abs(ff - fi);
    const days = dif/(1000 * 3600 * 24);
    const min = days * 24 * 60;

    console.log(`fechaInicial: ${fechaInicial} - fechafinal: ${fechafinal} = ${days} = ${min}`);
    return(days);
}

function difHorasAminutos(hhinicial, hhfinal){

    let hi;

    // cambia de formato AMPM a 24 horas
    if (hhinicial.lastIndexOf("PM")){
        hi = hhinicial.split(":")[0] + 12;
    }else{
        hi = hhinicial.split(":")[0];
    }

    const mi = hhinicial.split(":")[1];
    const si = hhinicial.split(":")[2];

    let hf;
    if (hhfinal.lastIndexOf("PM")){
        hf = hhfinal.split(":")[0] + 12;
    }else{
        hf = hhfinal.split(":")[0];
    }

    const mf = hhfinal.split(":")[1];
    const sf = hhfinal.split(":")[2];

    const tm = (hf - hi) * 60 + (mf - mi);

    console.log(`hhinicial: ${hhinicial} - hhfinal: ${hhfinal} = ${tm}`);

    return(tm);
}

module.exports = { restarFechas,  difHorasAminutos };