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

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(`Usuário: ${username.value}, Senha: ${password.value}`);

    check(username.value, credentials.username) && check(password.value, credentials.password)
        ? form.submit()
        : alert('Credenciais incorretas!')
});