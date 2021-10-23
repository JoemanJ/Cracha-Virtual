const links = {
               Instagram: "JoemanJ34",
               Discordapp: "users/248514151071088641",
               Github: "JoemanJ"
               }

function getGithubInfo(){
    const url = `https://api.github.com/users/${links.Github}`

    fetch(url).then(response => response.json()).then(json => {
        myName.textContent = json.name
        profilePicture.src = json.avatar_url
        bio.textContent = json.bio
        githubUsername.textContent = json.login
        Github.href = json.html_url
    })
}

function changeLinks(){
    const lista = document.getElementById("links")

    for(let li of lista.children){
        const app = li.children[0].getAttribute('id')

        li.children[0].href = `https://${app}.com/${links[app]}`

        //alert(li.children[0].href)
    }
}

changeLinks()
getGithubInfo()

function MudarLogoInstagram(){
    imgInstagram.src = 'images/InstagramC.svg'
}

function LogoInstagram(){
    imgInstagram.src = 'images/Instagram.svg'
}

function MudarLogoDiscord(){
    imgDiscord.src = 'images/DiscordappC.svg'
}

function LogoDiscord(){
    imgDiscord.src = 'images/Discordapp.svg'
}