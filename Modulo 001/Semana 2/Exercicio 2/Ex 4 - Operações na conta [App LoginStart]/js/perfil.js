const {defaultNameProfile, defaultEmailProfile, defaultImageProfile} = {
    defaultNameProfile     : 'Henrique',
    defaultEmailProfile    : 'henrique@esudante.senai',
    defaultImageProfile    : 'https://picsum.photos/200/300/?blur=2'
};
var nameProfile = localStorage.getItem('nameProfile');
if (nameProfile == null) { localStorage.setItem('nameProfile', defaultNameProfile); };

var emailProfile = localStorage.getItem('emailProfile');
if (emailProfile == null) { localStorage.setItem('emailProfile', defaultEmailProfile); };

var imageProfile = localStorage.getItem('imageProfile');
if (imageProfile == null) { localStorage.setItem('imageProfile', defaultImageProfile); };

function setImage() {
    var image = document.createElement('img');
    image.src = imageProfile
    document.getElementById('imageProfile').appendChild(image);
};

function changeUserName() {
    const changeNameProfile = document.getElementById('name').value;
    console.log(changeNameProfile)
    localStorage.setItem('nameProfile', changeNameProfile);
    window.location.reload(true);
}

function changeEmailProfile() {
    const changeEmailProfile = document.getElementById('email').value;
    localStorage.setItem('emailProfile', changeEmailProfile);
    window.location.reload(true);
}

function changeImageProfile() {
    const changeImageProfile = document.getElementById('image').value;
    console.log(changeImageProfile)
    localStorage.setItem('imageProfile', changeImageProfile);
    window.location.reload(true);
}

nameProfile     = localStorage.getItem('nameProfile'),
emailProfile    = localStorage.getItem('emailProfile'),
imageProfile    = localStorage.getItem('imageProfile'),

window.onload = (event) => {
    nameProfile != ''
        ? document.getElementById('nameProfile').innerHTML = `Logado como <strong>${nameProfile}</strong>`
        : document.getElementById('nameProfile').innerHTML = `Logado como <strong>Usuário sem Identificação</strong>!`

    emailProfile != ''
        ? document.getElementById('emailProfile').innerHTML = `E-mail: <strong>${emailProfile}</strong>`
        : document.getElementById('emailProfile').innerHTML = `E-mail <strong>Usuário sem e-mail</strong>!`

    imageProfile != ''
        ? setImage()
        : document.getElementById('imageProfile').innerHTML = 'Perfil Sem Imagem!'
}