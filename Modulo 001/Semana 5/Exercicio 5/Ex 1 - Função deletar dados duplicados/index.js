const lista =  ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José', 'hrs', 'hrs'];
let duplicado = [];

const listaDuplicada = lista.filter(function(elemento , posicao){
    if (lista.indexOf(elemento) != posicao ) {
        duplicado.push(lista[posicao]);
    }
    return lista.indexOf(elemento) == posicao;
}) 

console.log(duplicado,listaDuplicada);
