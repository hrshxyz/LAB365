const user_name = document.getElementById("user_name");
const user_image = document.getElementById("user_image");
const user_idgit = document.getElementById("user_idgit");
const user_bio = document.getElementById("user_bio");

const user_linkedin = document.getElementById("user_linkedin");
const user_linkedin_link = 'https://www.linkedin.com/in/henrique-ribeiro-souto/'
const user_linkedin_image = './images/linkedin.png'
const user_github = document.getElementById("user_github");
const user_github_image = './images/github.png'

async function searchData() {
    try {
        const response = await fetch("https://api.github.com/users/hrshxyz");
        const dados = await response.json()
        console.log(dados);
        user_name.innerHTML = dados?.name;
        user_image.src = dados?.avatar_url;
        user_idgit.innerHTML = `ID: ${dados?.id}`;
        user_bio.innerHTML = dados?.bio;
        const user_html_url = dados?.html_url;
        user_linkedin.innerHTML = (`<a href="${user_linkedin_link}"><img src="${user_linkedin_image}"></a>`)
        user_github.innerHTML = (`<a href="${user_html_url}"><img src="${user_github_image}"></a>`)
    }
    catch (e) { 
        console.log('Falha ao carregar os dados')
    }

}

searchData();