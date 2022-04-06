function quantoFaltaPara(m, d) {

    const dataAtual = new Date()
    dataAtual.setHours(0)
    dataAtual.setMinutes(0)
    dataAtual.setSeconds(0)
    dataAtual.setMilliseconds(0)

    let anoAtual = dataAtual.getFullYear()

    let dataNiver = new Date(anoAtual,m - 1,d)
    const dataAtualTS = +dataAtual
    const dataNiverTS = +dataAtual

    if(dataNiverTS < dataAtualTS ){
        dataNiver.setFullYear(++anoAtual)
        dataNiverTS = +dataNiver
    }

    const UM_DIA = 24*60*60*1000
    const diferenca = dataNiverTS - dataAtualTS
    return diferenca/UM_DIA


}
