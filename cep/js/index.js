import addElements from "./modules/addElements.js";
import data from "./modules/data.js";

function createData(){
    const {form,cep,inputLogradouro,inputBairro,inputCidade,inputEstado} = addElements()
    const {fetchData} = data()
    
    async function getCep(){
        const {json} = await fetchData(cep.value)
        inputCidade.value = json.localidade
        inputEstado.value = json.uf
    }
    cep.addEventListener("change",getCep)
}
createData()