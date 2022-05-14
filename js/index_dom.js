import cambiarModo from "./cambiar_tema.js";
import cuentaRegresiva from "./contador.js";
import {moveBall,atajos} from "./eventos_teclado.js";
import menuHamburguesa from "./menu_hamburguesa.js";
import relojDigital from "./reloj-digital.js";
import scrollBtn from "./scroll_btn.js";




const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    menuHamburguesa(".btnMenu",".menu",".menu__item a","#iconoMenu");
    relojDigital("#btnIniciarRl","#btnDetenerRl","#btnIniciarAl","#btnDetenerAl",".reloj__hora","#audio");
    cuentaRegresiva("#cuentaRegresiva","Julio 21, 2022 05:25:19","Feliz Cumpleaños Luis!!");
    scrollBtn(".btnScroll");
    cambiarModo(".btnModo","#iconModo","darkMode");
})

d.addEventListener("keydown",(e)=>{
    atajos(e);
    moveBall(e,".ball",".stage");
})




