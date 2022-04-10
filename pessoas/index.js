(function(){
    let usuarios = []
    this.pessoa = {

        get usuario(){
            if(usuarios.length){
                return usuarios[usuarios.length-1]
            }
        },
        
        set usuario(_usuario){
            if(usuarios.indexOf(_usuario)<0){
                usuarios.push(_usuario)
            }
        },
        get usuarios(){
            return usuarios
        }
    }
})()