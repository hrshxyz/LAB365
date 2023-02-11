const {nameProfile, emailProfile, imageProfile} = {
    nameProfile     : 'Henrique',
    emailProfile    : 'henrique@esudante.senai',
    imageProfile    : 'puff.png'
};

function setImage() {
    var image = document.createElement('img');
    image.src = `./images/${imageProfile}`
    document.getElementById('imageProfile').appendChild(image);
};

nameProfile != ''
    ? document.getElementById('nameProfile').innerHTML = `Logado como <strong>${nameProfile}</strong>`
    : document.getElementById('nameProfile').innerHTML = `Logado como <strong>Usuário sem Identificação</strong>!`

emailProfile != ''
    ? document.getElementById('emailProfile').innerHTML = `E-mail: <strong>${emailProfile}</strong>`
    : document.getElementById('emailProfile').innerHTML = `E-mail <strong>Usuário sem e-mail</strong>!`

imageProfile != ''
    ? setImage()
    : document.getElementById('imageProfile').innerHTML = 'Perfil Sem Imagem!'

