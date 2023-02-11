const form      = document.getElementById('form');
const username  = form.elements['username'];
const password  = form.elements['password'];

const credentials = {
    username:   'henrique',
    password:   'senha123'

};

function check(credentialObject, credentialInput) {
    const result = credentialObject === credentialInput ? true : false;
    return result;
};

function submitLocalStorage(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    form.submit();
};

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(`Usuário: ${username.value}, Senha: ${password.value}`);

    check(username.value, credentials.username) && check(password.value, credentials.password)
        ? submitLocalStorage(username.value, password.value)
        : alert('Credenciais incorretas!')
});

window.onload = (event) => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (check(username, credentials.username) && check(password, credentials.password)){
        submitLocalStorage(username, password)
    };
};