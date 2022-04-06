(function () {
    const dateEventDOM = document.querySelector(".hero-content h1 span").innerText
    console.log(dateEventDOM)

    const dateEvent = getDate(dateEventDOM)
    console.log(dateEvent)
    const ONE_MINUTE = 60 * 1000
    const ONE_HOUR = 60 * ONE_MINUTE
    const ONE_DAY = 24 * ONE_HOUR

    function updateDate(){
        const today = new Date()

        let left = dateEvent.getTime() - today.getTime()
        const daysLeft = parseInt(left / ONE_DAY)
        left = left - daysLeft * ONE_DAY

        const hoursLeft = parseInt(left / ONE_HOUR)
        left = left - hoursLeft * ONE_HOUR
        
        const minutesLeft = parseInt(left / ONE_MINUTE)
        left = left - minutesLeft * ONE_MINUTE
        
        const secondsLeft = parseInt(left / 1000)

        return {daysLeft,hoursLeft,minutesLeft,secondsLeft}
    }
    

    const {daysLeft, hoursLeft, minutesLeft, secondsLeft} = updateDate()

    
    const p = document.createElement("p")
    addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft)

    function addLeftTime(d, h, m, s) {
        
        p.textContent = `Contagem regressiva: ${d} dias, ${h} horas, ${m} minutos, ${s} segundos `
        document.querySelector(".hero-content").appendChild(p)
    }



    setInterval(()=>{
        
        const {daysLeft, hoursLeft, minutesLeft, secondsLeft} = updateDate()
        addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft)
    },1000)



    function getDate(str) {
        const [date, hour] = str.split(" ")
        const [day, month, year] = date.split("/")
        const [h, m] = hour.split("H")

        return new Date(year, month - 1, day, h, m)
    }

})()
