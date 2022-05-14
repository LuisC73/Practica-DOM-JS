export default function cambiarModo(btnModo,icono,classDark){
    const d = document;
    const ls = localStorage;
    
    let $selectors = d.querySelectorAll("[data-dark]");

    const modoClaro = () => { 
        $selectors.forEach(el => el.classList.add(classDark));
        ls.setItem("theme","claro");
    }
    const modoOscuro = () => {
        $selectors.forEach(el =>el.classList.remove(classDark));
        ls.setItem("theme","oscuro");
    }

    d.addEventListener("click",e=>{
        if(e.target.matches(btnModo)|| e.target.matches(`${btnModo} *`)){
            d.querySelector(icono).classList.toggle("bxs-sun");
            if(d.querySelector(icono).classList.contains("bxs-sun")){
                modoClaro();
            }else{
                modoOscuro();
            }       
        }
    })

    d.addEventListener("DOMContentLoaded",e=>{
        if(ls.getItem("theme")=== null) ls.setItem("theme","claro");
        if(ls.getItem("theme")=== "claro") modoClaro();
        if(ls.getItem("theme")=== "oscuro") modoOscuro();
        
    })
}