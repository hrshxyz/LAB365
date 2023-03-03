const vogais = ['a', 'e', 'i', 'o', 'u'];

function checaVogal(palavra) {

    if (typeof palavra != "string") {
        console.log("Favor passar uma String!");
        return;
    };

    const palavraToLowerCase = palavra.toLowerCase();
    const tamanhoDaString = palavraToLowerCase.length;
    let contaVogais = 0;
    let arrayVogais = [];
    vogais.forEach((vogal) => {
        for (i = 0; i < tamanhoDaString; i++) {
            if (vogal === palavraToLowerCase.substr(i, 1)) {
                contaVogais++;
                arrayVogais.push(vogal);
            }
        };
    });

    var conta = {};

    arrayVogais.forEach(function(element) {
      conta[element] = (conta[element] || 0) + 1;
    });

    if ( contaVogais < 1 ) {
        console.log('\nNão existem vogais na String');
        console.log(`String: ${palavra}\n`);
    } else {
        console.log(`Existem ${contaVogais} vogal(is) na String`);
        console.log(`String: ${palavra}`);
        for (var element in conta) {
            console.log(`${element} = ${conta[element]}`);
        }; 
    };
};

checaVogal("Conte quantas vogais tem nesta String");
checaVogal("Cccccccccccccccccccrrrrrrrrrrrrrrrttttttttttttgggggggggggggg");
checaVogal("abcdefg");