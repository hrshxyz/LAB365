let nomes = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
function busca(nome) {
    let resto = [];
    let achou = '';
    let check = 0;
    nomes.forEach((name) => {
        if (name === nome) {
            console.log(name);
            achou = name;
            check = 1;
            return;
        }
        resto.push(name);
    })
    check
        ? console.log(achou, resto)
        : console.log("Nome não encontrado")
}

busca("Danilo");