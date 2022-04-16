export default function addElements(){
    const form = document.querySelector('form')
    const cep = document.querySelector('#inputCEP')
    const inputLogradouro = document.querySelector('#inputLogradouro')
    const inputBairro = document.querySelector('#inputBairro')
    const inputCidade = document.querySelector('#inputCidade')
    const inputEstado = document.querySelector('#inputEstado')

    return {form,cep,inputLogradouro,inputBairro,inputCidade,inputEstado}

}

