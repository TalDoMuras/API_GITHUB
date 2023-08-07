import { baseUrl } from "../variables.js"

async function getUser(nomeUsuario){
    const url = `${baseUrl}/${nomeUsuario}`
    const resposta = await fetch(url)
    return await resposta.json()
}

export { getUser }