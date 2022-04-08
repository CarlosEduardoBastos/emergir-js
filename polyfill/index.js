if(!String.prototype.replaceAll){
    String.prototype.replaceAll = function(search,replacement){
        if(!(search instanceof String || typeof search === 'string')){
            throw Error("First paramenter must be a string")
        }
        if(!(replacement instanceof String || typeof replacement === 'string')){
            throw Error("Second paramenter must be a string")
        }
        return this.valueOf().split(search).join(replacement)
    }
}