function getElements(){
    const body = document.getElementsByClassName("fs")

    return {body}
}

function scrollElement(){
    const {body} = getElements()

    window.addEventListener("scroll", function(){
        if(scrollY > 250 && !body[0]){
            document.body.classList.add('fx')
        }else if(screenY <= 250 && !body[0]){
            document.body.classList.remove("fx")
        }
    })
}
scrollElement()