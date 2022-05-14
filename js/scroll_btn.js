export default function scrollBtn(btnScroll) {
    const d = document,
        w = window,
        $scrollBtn = d.querySelector(btnScroll);



    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if (scrollTop > 300) {
            $scrollBtn.classList.add("btnScroll__active");
        } else {
            $scrollBtn.classList.remove("btnScroll__active");
        }
    })

    d.addEventListener("click", e => {
        if (e.target.matches(btnScroll) || e.target.matches(`${btnScroll} *`)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0,
            });
        }
    })
}