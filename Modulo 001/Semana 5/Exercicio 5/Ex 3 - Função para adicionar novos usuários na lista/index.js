let lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
let check = 0;
function addnomes(...nomes) {
    nomes.forEach((nome)=> {
        if (typeof nome != "string") {
            console.log(`Não é string: ${nome}`)
            check = 1;
        }
    });

    lista.forEach((nome) => {
        for (i = 0; i < nomes.length; i++) {
            if (nomes[i] == nome) {
                console.log(`Nome já existe na lista: ${nome}`);
                console.log(`Lista não foi inseria: ${nomes}`);
                check = 1;
            } 
        }
    });

    check 
      ? console.log('Falha ao inserir')
      : ( lista = lista.concat(nomes), console.log(lista))

}

addnomes("nome", "teste","Aderball")

