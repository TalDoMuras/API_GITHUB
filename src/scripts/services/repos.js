import { baseUrl, reposQuantity } from "../variables.js"

async function getRepos(nomeUsuario){
    const url = `${baseUrl}/${nomeUsuario}/repos?per_page=${reposQuantity}`
    const resposta = await fetch(url)
    return await resposta.json()
}

export { getRepos }