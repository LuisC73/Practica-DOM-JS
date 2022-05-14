
export default function cuentaRegresiva(id,fechaLimite,mensaje){
    const d = document;
    let $cuentaRegresiv = d.querySelector(id),
    $fechaLimite = new Date(fechaLimite).getTime();

    let tempo = setInterval(()=>{
        let fechaActual = new Date().getTime(),
        tiempoLimite = $fechaLimite - fechaActual,
        dias = Math.floor(tiempoLimite / (1000*60*60*24)),
        horas =( "0" + Math.floor(tiempoLimite % (1000*60*60*24) / (1000*60*60))).slice(-2),
        minutos = ( "0" + Math.floor(tiempoLimite % (1000*60*60) / (1000*60))).slice(-2),
        segundos = ( "0" + Math.floor(tiempoLimite % (1000*60) / (1000))).slice(-2);

        $cuentaRegresiv.innerHTML = `<h2>Faltan : ${dias} Dias ${horas} Horas ${minutos} Minutos ${segundos} Segundos</h2>`;
        // console.log($fechaLimite,fechaActual)

        if(tiempoLimite<0){
            clearInterval(tempo);
            $cuentaRegresiv.innerHTML= `${mensaje}`
        }
    },1000)

}