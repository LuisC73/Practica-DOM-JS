export default function cambiarModo(btnModo,icono,classDark){
    const d = document;
    
    let $seccion1 = d.getElementById("seccion1");

    d.addEventListener("click",e=>{
        if(e.target.matches(btnModo)|| e.target.matches(`${btnModo} *`)){
            d.querySelector(icono).classList.toggle("bxs-sun");
            $seccion1.classList.toggle("bg");  
            
        }
    })
}