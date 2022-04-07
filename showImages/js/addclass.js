let elements = [...document.querySelectorAll("[data-addclass-on-scroll]")]

window.addEventListener("scroll", addClassOnScroll)

function isElementIntoView(el){
    let reck = el.getBoundingClientRect()
    return (
        (reck.top <= 0 && reck.bottom >= 0) ||
        (reck.top >= 0 && reck.bottom <= innerHeight)
    )
}

function addClassOnScroll(){

    if(elements.length === 0){
        window.removeEventListener("scroll",addClassOnScroll)
    }
    elements.forEach(el => {
        if(isElementIntoView(el)){
            let delay = parseInt(el.getAttribute("data-addclass-on-scroll-delay")) || 0

            setTimeout(function(){
                let _class = el.getAttribute("data-addclass-on-scroll")
                el.classList.add(_class)
                el.removeAttribute("data-addclass-on-scroll")
                el.removeAttribute("data-addclass-on-scroll-delay")
                elements = [...document.querySelectorAll("[data-addclass-on-scroll]")]
            },delay)
        }
    })
}