import {api} from "./API";

export async function getTheRickandMorty (nome){
    try{
        const resultado = await api.get()
        for (let c=0; c<nome.length; c++) {
            if (resultado.data.results[c].name == nome) {
                return resultado.data.results[c]
            }
        }
        return ''
            
    } catch (error) {
        console.log(error)
        return{}
    }
}