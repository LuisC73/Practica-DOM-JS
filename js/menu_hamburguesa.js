export default function menuHamburguesa(btnMenu,menu,menu__item,iconoMenu){
    const d = document;

    d.addEventListener("click",e =>{
        if(e.target.matches(btnMenu)|| e.target.matches(`${btnMenu} *`)){
            d.querySelector(menu).classList.toggle("active__menu")
            d.querySelector(iconoMenu).classList.toggle("bx-x")
        }

        if(e.target.matches(menu__item)){
            d.querySelector(menu).classList.remove("active__menu")
        }
    })
}
