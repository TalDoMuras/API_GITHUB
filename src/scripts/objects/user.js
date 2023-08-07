const user = {
    avatarUrl: "",
    name: "",
    bio: "",
    userName: "",
    followers: "",
    following: "",
    events: {
        pushEvent: [],
        creatEvent: []
    },
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },

    setEvents(events) {
        this.events.pushEvent = [];
        this.events.creatEvent = [];
        let TenLatestEvents = [];
        let listEvents = events;
        
        if (listEvents.length > 0) {
            let pushEvents = listEvents.filter(event => event.type === "PushEvent")
            let creatEvents = listEvents.filter(event => event.type === "CreateEvent")
            TenLatestEvents = pushEvents.concat(creatEvents).slice(0,10)

            if(TenLatestEvents.length > 0){
                let pushEventsData = pushEvents.map(event => [event.repo.name, event.payload.commits[0].message]);
                this.events.pushEvent = pushEventsData

                const eventscreatEvent = TenLatestEvents.filter(event => event.type !== "PushEvent").map(event => event.repo.name);
                this.events.creatEvent = eventscreatEvent
            }
        }
    },

    setRepositories(repositories) {
        this.repositories = repositories
    }
}

export { user }