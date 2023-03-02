let nomes = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
function troca(indice1, indice2) {
    console.log(nomes)
    if (indice1 === indice2) {
        console.log("Indices não podem ser iguais")
        return;
    }
    if (nomes.length < indice1 || nomes.length - 1 < indice2 || indice1 < 0 || indice2 < 0) {
        console.log(`Entre com um número entre o array de 0 a ${nomes.length - 1}`)
        return;
    }
    let origem = nomes[indice1];
    let destino = nomes[indice2];
    nomes[indice1] = destino;
    nomes[indice2] = origem;
    console.log(nomes);
}
let num1 = prompt('Indice 1');
let num2 = prompt('Indice 2');
troca(num1, num2);