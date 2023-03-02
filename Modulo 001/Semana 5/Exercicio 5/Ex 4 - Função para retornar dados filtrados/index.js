const lista = [
    {nome: "luis", idade: 26},
    {nome: "norma", idade: 16},
    {nome: "daiana", idade: 26},
    {nome: "jorge", idade: 16},
    {nome: "kauan", idade: 16},
    {nome: "charles", idade: 26},
    {nome: "marco", idade: 16},
    {nome: "bruno", idade: 16}
    ]

let lista18 = [];
let listamais18 = [];
lista.map((dado, indice) => {
    if ( dado.idade <= 18) {
        lista18.push(dado)
    } else {
        listamais18.push(dado)
    }
});

console.log(lista18)
console.log(listamais18)