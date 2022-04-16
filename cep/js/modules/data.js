export default function data(){
    async function fetchData(cep){
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const json = await response.json()
        return {json,response}
    }
    return {fetchData}
}