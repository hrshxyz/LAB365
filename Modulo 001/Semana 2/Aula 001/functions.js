/* console.log("Hello ");

for (i = 0; i < 10; i++) {
    console.log('World');
}

const alunos = ['1', '2', '3'];
alunos.forEach((aluno) => {
    console.log(aluno);
});

let somaNumeroes = 0
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero) => { 
    somaNumeroes += numero; 
});
const media = somaNumeroes / numeros.length;
console.log(media); */

function multiplicationTable() {
    let number = document.getElementById('inputNumber').value;
    for ( index=1 ; index <=10 ; index++ ) {
        console.log(number*index)
    }
}