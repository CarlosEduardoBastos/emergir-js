function randomNumber(){
    let random = parseInt(Math.random()*6)

    random === 0 ? random++ : random
    return {random}
}

function addBackground(){
    const body = document.body
    let {random} = randomNumber()
    body.style.backgroundImage = `url(./images/${random}.jpg)`
}

addBackground()