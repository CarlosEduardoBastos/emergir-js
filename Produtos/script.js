(function(){
    let _quantidade = 0
    let _contador = 0

    this.produto = {
        get quatidade(){
            console.log(`quantidade foi consultada ${++_contador} vez${_contador > 1 ? `es`:""}`)
            return _quantidade
        },
        set quantidade(valor){
            if(valor > 0){
                _quantidade = valor
            }
        }
    }
})()