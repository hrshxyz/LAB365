console.log('hello');
var caixinha = 10;
var conta = 5;

console.log( caixinha < conta );

var senha = 'dragonball';
var senhaServidor = 'dragonballZNaruto';

console.log( senha === senhaServidor );

var isValid = true;

console.log( !isValid );

var caixinha = 20;
var conta = '20';

console.log( caixinha === conta );

var conta = String(20);
// -----------------------
const joao = 31;
const alex = 16;
const show = 'iniciando';
const show2 = 'iniciado'

if ( joao >= 18 && joao < 30 ) {
    console.log('Pode ir no show')
} else {
    console.log('Não pode ir!')
};

if ( show === 'iniciando' || show === 'iniciado' ) {
    console.log('Pode ir no show')
} else {
    console.log('Não pode ir!')
};

if ( joao < 50  ) {
    if ( show == 'iniciando' ) {
        console.log('Pode ir no show')
    }
    console.log('Não Executou')
} else {
    console.log('Não pode ir!')
};

var fruta = 'laranja';

switch(fruta) {
    case 'laranja':
        console.log('laranja');
        break;
    case 'uva':
        console.log('uva');
        break;
};


