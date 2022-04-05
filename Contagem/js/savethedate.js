(function () {
    const dataEventDOM = document.querySelector(".hero-content h1 span").innerText
    console.log(dataEventDOM)

    const dateEvent = getDate(dataEventDOM)
    console.log(dateEvent)

    const today = new Date()
    let left = dateEvent.getTime() - today.getTime()
    const ONE_MINUTE = 60 * 1000
    const ONE_HOUR = 60 * ONE_MINUTE
    const ONE_DAY = 24 * ONE_HOUR
    const daysLeft = parseInt(left / ONE_DAY)
    left = left - daysLeft * ONE_DAY
    const hoursLeft = parseInt(left / ONE_HOUR)
    left = left - hoursLeft * ONE_HOUR

    const minutesLeft = parseInt(left / ONE_MINUTE)
    left = left - minutesLeft * ONE_MINUTE
    const secondsLeft = parseInt(left / 1000)
    addLeftTime(daysLeft,hoursLeft,minutesLeft,secondsLeft)

    function addLeftTime(d,h,m,s){
        const paragrafo = document.createElement("p")
        const heroContent = document.querySelector(".hero-content")
        paragrafo.textContent = `Contagem regressiva: ${d}/${h}/${m}/${s}`
        heroContent.appendChild(paragrafo)

    }

    function getDate(string){
        const [date,hour] = string.split(" ")
        const [day,month,year] = date.split("/")
        const [hours,minutes] = hour.split("H")
        return new Date(year, month - 1, day, hours, minutes)
    }

})()