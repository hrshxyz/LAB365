const usuarios = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];
const frutas = ['Banana', 'Morango', 'Maçã', 'Uva', 'Pêra', 'Laranja'];
let listaconcat = [];

for (i = 0; i < usuarios.length; i++) {
    listaconcat.push(`${usuarios[i]} - ${frutas[usuarios.length-i-1]}`);
}

console.log(listaconcat);
