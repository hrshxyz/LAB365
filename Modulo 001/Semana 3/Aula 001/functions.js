/* https://github.com/walberson/semana3aula1 */

/* let copa2026 = ["brazil","franca","alemanha","italia","espanha"];
console.log(copa2026)
copa2026.push("argentina");
console.log(copa2026)
copa2026.unshift("campeche");
console.log(copa2026)
copa2026.splice(3,1,"equador")
console.log(copa2026) */

/* 
let copa2026 = ["brazil","franca","alemanha","italia","espanha"];

let ul = document.getElementById("list");
copa2026.forEach((time) => {
    let li = document.createElement("li");
    li.innerHTML = time;
    ul.appendChild(li)
});

copa2026.push("Belgica");


const numeros = [2, 4, 6];
const dobros = numeros.map(numeros => {
    return numeros * 2
});

console.log(dobros)

const numerosMenoresQue10 = dobros.filter((numero) => {
    return numero < 10
})

console.log(numerosMenoresQue10)

let aprovados = ["wallis","tales","william","glauton"];

let verdadeirosAprovados = aprovados.filter((aluno) => {
    return aluno !== 'wallis'
});

console.log(verdadeirosAprovados);
 */
/* const numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log( numeros.every((num)=>{
    num == 4
}) );
 */
/* 
num => console.log(num); */

} */
/* const carteiras = [29.55, 41.22, 33.54, 12.12, 10.20];
const carteiraTotal = carteiras.reduce(
  (acumulador, valorAtual, indiceAtual, array) => {
    acumulador += valorAtual;
    if (indiceAtual === array.length-1) {
      return acumulador / array.length;
    } else {
      return acumulador;
    }
  }
);
console.log(carteiraTotal); */

const carteiras = [29.55, 41.22, 33.54, 12.12];

const carteiraTotal = carteiras.reduce((acumulador, valorAtual)=>{
    return acumulador = acumulador + valorAtual
})

console.log(carteiraTotal)