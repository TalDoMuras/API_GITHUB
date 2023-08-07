const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        let infoUsuario = `
         <div class="info">
            <img src="${user.avatarUrl}" alt="Foto  de perfil do usuario">
            <div>
                <h1>${user.name ?? "Dados não cadastrados 🤦‍♂️"}</h1>
                <p>${user.bio ?? "Dados não cadastrados 🤦‍♂️"}</p>
                <p>Seguindo: ${user.following}</p>
                <p>Seguidores: ${user.followers}</p>
            </div>
         </div>`

        this.userProfile.innerHTML = infoUsuario
        if (user.repositories.length > 0) {
            let listRepos = ""
            user.repositories.forEach(repo => {
                listRepos += `
                <li>
                <a class="btn" href="${repo.html_url ?? ""}" target="_blank">${repo.name ?? "Dados não cadastrados 🤦‍♂️"}</a>
                <p>Forks: ${repo.forks_count}⠀⠀⠀Star: ${repo.stargazers_count}⠀⠀⠀Watchers: ${repo.watchers_count}</p>
                <p>Linguagem: ${repo.language == null ? "Não informada" : repo.language}</p>
                </li>`
            })

            const infoRepo = `<div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${listRepos}</ul>
        </div>`

          this.userProfile.innerHTML += infoRepo
        }

        if(typeof user.events.pushEvent[0] !== 'undefined' || typeof user.events.creatEvent[0] !== 'undefined'){
            if(user.events.pushEvent.length > 0){
                let infoPushEvents = ""

                user.events.pushEvent.forEach(pushEvent => {
                    infoPushEvents += `<li>${pushEvent[0]}⠀⠀⠀⠀⠀-${pushEvent[1]}</li>`
                })
                let infoPushEventsContainer = `
                <h3>Push Events</h3>
                <ul style="margin: 10px 0;">${infoPushEvents}</ul>`
                this.userProfile.innerHTML += infoPushEventsContainer
            }

            if(user.events.creatEvent.length > 0){
                let infoCreateEventList = ""
                user.events.creatEvent.forEach(createEvent => {
                    infoCreateEventList += `<li>${createEvent}</li>`
                })
                let infoCreateEventContainer = `
                <h3 style="margin: 10px 0;">Create Events</h3>
                <ul>${infoCreateEventList}</ul>`
                this.userProfile.innerHTML += infoCreateEventContainer
            }

        }
    },

    renderUserNotFound(){
        this.userProfile.innerHTML = "Usuario não encontrado"
    }
}

export { screen }