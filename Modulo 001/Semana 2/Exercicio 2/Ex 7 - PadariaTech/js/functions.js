function calculatePrice(price) {
    let listp = document.getElementById('result');
    let tabela = '<table>';

    tabela += '<tr><th align="center"> Quantidade de Pães</th>';
    tabela += '<th align="center"> Valores</th> </tr>';

    for ( index=1 ; index <=50 ; index++ ) {
        let calc = parseFloat(price*index).toFixed(2);
        tabela += '<tr><td align="center">' + index + '</td>';
        tabela += '<td align="center"> R$ ' + calc + '</td> </tr>';
    }
    tabela += '</table>';
    listp.innerHTML = tabela;
};

function alert() {
    var listp = document.getElementById('result');
    listp.innerHTML = 'Entre com um valor acima de zero!'
}

function checkValue() {
    var price = document.getElementById('price').value;
    price > 0
        ? calculatePrice(price)
        : alert()
}