export default function relojDigital(btnIniciarRl, btnDetenerRl, btnIniciarAl, btnDetenerAl, relojHora,audio) {

    const d = document;

    function hora() {
        let fecha = new Date();
        let hora = fecha.getHours();
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();

        d.querySelector(relojHora).innerText = `${hora}:${minutos}:${segundos}`;
    }

    setInterval(hora, 1000)

    d.addEventListener("click", e => {
        if (e.target.matches(btnIniciarRl)) {
            d.querySelector(relojHora).classList.add("reloj__active")
            d.querySelector(btnIniciarRl).disabled = true;
        }

        if (e.target.matches(btnDetenerRl)) {
            d.querySelector(relojHora).classList.remove("reloj__active")
            d.querySelector(btnIniciarRl).disabled = false;
        }

        if(e.target.matches(btnIniciarAl)){
            d.querySelector(audio).play()
            d.querySelector(audio).loop = true;
            d.querySelector(btnIniciarAl).disabled = true;
        }

        if(e.target.matches(btnDetenerAl)){
            d.querySelector(audio).pause()
            d.querySelector(btnIniciarAl).disabled = false;
        }
    })

}