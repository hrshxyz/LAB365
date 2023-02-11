function calculatePrice() {
    let listp = document.getElementById('result');
    let tabela = '<table>';

    tabela += '<tr><th align="center"> Quantidade de Pães</th>';
    tabela += '<th align="center"> Valores</th> </tr>';

    let price = document.getElementById('price').value;
    for ( index=1 ; index <=50 ; index++ ) {
        let calc = parseFloat(price*index).toFixed(2);
        tabela += '<tr>';
        tabela += '<tr><td align="center">' + index + '</td>';
        tabela += '<td align="center"> R$ ' + calc + '</td> </tr>';
        tabela += '</tr>';
    }
    listp.innerHTML = tabela;
};