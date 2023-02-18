const message_1 = "Feliz Aniversário!";
const message_2 = "Seu aniversário já passou!";
const message_3 = "Data Incorreta!";
const message_4 = "Falta(m) ";
const message_5 = " dia(s) para o seu Aniversário!";
const message_6 = "Você tem ";
const message_7 = " Anos";
const message_8 = " Milisegundos para o seu Aniversário!";

function print(message) {
    const birthday = document.getElementById("birthday");
    birthday.innerHTML = (`${message}`);
    document.getElementById('bd').style.display = 'block';
}

function calc(today, date){
    const onlyYear = new Date().getFullYear();
    const years = date.replace(/[0-9]{4}/, `${onlyYear}`);
    const diffInMs = new Date(years) - new Date(today);
    const diffInMsActualDate = new Date(years) - new Date();
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    Math.sign(diffInDays) != -1
        ? diffInDays == 0
            ? print(message_1)
            : print(`${message_4}${diffInDays}${message_5} - ${diffInMsActualDate}${message_8}`)
        : print(message_2)

    }

function inputDate() {
    const today = new Date().toISOString().slice(0, 10)
    const date = document.getElementsByTagName("input")[0].value

    date != ''
        ? calc(today, date)
        : print(message_3)
}

function interval() {
    inputDate()
    setInterval(inputDate, 2000)
}

window.onload = function() {
    document.getElementById('bd').style.display = 'none';
}

check.addEventListener('click', interval);
