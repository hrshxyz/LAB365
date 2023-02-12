window.onload = function() {
    document.getElementById('afterTotal').style.display = 'none';
    document.getElementById('confirm').style.display = 'none';
}

const prices = [];
let totalPayable = 0;

function calculatePrice(price) {
        document.getElementById('afterTotal').style.display = 'none';
        let listp = document.getElementById('result');
        inputPrice      = document.getElementById('price').value;
        prices.push(inputPrice);
        console.log(prices);

        let tabela = '<table>';
        tabela += '<tr><th align="center"> Código dos Produtos</th>';
        tabela += '<th align="center"> Valores</th> </tr>';
        
        prices.forEach( (price, index) => {
                let calc = parseFloat(price).toFixed(2);
                index++
                tabela += '<tr><td align="center">' + index + '</td>';
                tabela += '<td align="center"> R$ ' + calc + '</td> </tr>';        
            }
        );

        tabela += '</table>';
        listp.innerHTML = tabela;
};

function endProducts() {
    let listp = document.getElementById('total');
    let tabela = '<table>';
    tabela += '<tr><th align="center"> Quantidade de Produtos</th>';
    tabela += '<th align="center"> Total </th> </tr>';
    
    let total = 0;
    let totalProducts = 0;
    prices.forEach( (price, index) => {
            let calc = parseFloat(price).toFixed(2);
            total += parseFloat(calc);
            totalProducts = ++index;
        }
    );
    total = parseFloat(total).toFixed(2);
    totalPayable = total;

    tabela += '<tr><td align="center" Total>' + totalProducts +'</td>';
    tabela += '<td align="center"> R$ ' + total + '</td> </tr>';       
    tabela += '</table>';
    listp.innerHTML = tabela;

    document.getElementById('afterTotal').style.display = 'block';
}

function checkValue() {
    var price = document.getElementById('price').value;
    price > 0
        ? calculatePrice(price)
        : endProducts()
}

function exchangeMsg(payment) {
    const exchange = document.getElementById('exchange');
    payment = parseFloat(payment).toFixed(2);
    console.log(payment);
    let tabela = '<table>';
    tabela += '<tr><th align="center"> Troco </th></tr>';
    tabela += '<tr><td align="center">' + payment +'</td>';
    tabela += '</table>';
    exchange.innerHTML = tabela;
    document.getElementById('confirm').style.display = 'block';
}

function confirm() {
    window.location.reload(true)
}

function payment() {
    let money = document.getElementById('money').value;
    const exchange = document.getElementById('exchange');

    money = parseFloat(money).toFixed(2);
    totalPayable = parseFloat(totalPayable).toFixed(2);

    const payment = money - totalPayable;
    console.log(money);
    console.log(totalPayable)
    console.log(payment)
    console.log(Math.sign(payment))
    
    Math.sign(payment) != -1
        ? ( exchangeMsg(payment), exchange.removeAttribute("class") )
        : ( exchange.innerHTML = ('Valor menor que o total.'), exchange.setAttribute("class", "alert") )
}

