import { baseUrl } from "../variables.js"

async function getEvents(nameUser){
    const url = `${ baseUrl }/${ nameUser }/events`
    const response = await fetch(url)
    return await response.json()
}

export { getEvents }