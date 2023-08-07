import { getUser } from "./services/user.js"
import { getRepos } from "./services/repos.js"
import { getEvents } from "./services/events.js" 

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById("btn-search").addEventListener("click", ()=>{
    const botao = document.getElementById("input-search")

    if(botao.value == ""){
        alert("Preencha o campo de texto")
    }else{
        getData(botao.value)
    }
})

document.querySelector("#input-search").addEventListener(('keyup'), evento => {
    const botao = document.getElementById("input-search")
    const nomeUsuario = evento.target.value
    const key = evento.which || evento.key
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if(botao.value == ""){
            alert("Preencha o campo de texto")
        }else{
            getData(botao.value)
        }
    }
})

async function getData(userName){
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepos(userName)
    const responseEvents = await getEvents(userName)

    if(userResponse.message === "Not Found"){
        screen.renderUserNotFound()
        return
    }

    user.setInfo(userResponse)
    user.setEvents(responseEvents)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)
}