const stock = [
    {
        nameProduct: "Pao",
        price: 2,
        barcode: 123000,
        amountProduct: 10
    },
    {
        nameProduct: "beterraba",
        price: 4,
        barcode: 124001,
        amountProduct: 5
    }
];

let productRegister = [];
let searchOk = 0;

class CaixaRegistradora {
    constructor(nameProduct, price, barcode, amountProduct, nameClient) {
        this.nameProduct = nameProduct
        this.price = price
        this.barcode = barcode
        this.nameClient = nameClient
        this.amountProduct = amountProduct
    }

    addProduct(nameProduct, price, barcode, amountProduct) {
        if (nameProduct == '') {
            return console.log('Obrigatorio o preenchimento do campo nameProduct')
        } else if (price == null) {
            return console.log('Obrigatorio o preenchimento do campo preço')
        } else if (barcode == null) {
            return console.log('Obrigatorio o preenchimento do campo Código de Barra')
        } else if (amountProduct == null) {
            return console.log('Obrigatorio o preenchimento do campo quantidade')
        } else {
            stock.push({
                nameProduct: String(nameProduct),
                price: Number(price),
                barcode: Number(barcode),
                amountProduct: Number(amountProduct)
            });
        };
    };
    startService(nameClient) {
        if (nameClient == '') {
            return ('Obrigatorio passar o nome do cliente para iniciar o atendimento')
        } else {
            return this.nameClient = nameClient;
        }
    }
    checkAmountStock(barcode, amount) {
        let retorno = false
        if (barcode == null) {
            return console.log('Obrigatorio o preenchimento do campo Código de Barra')
        } else if (amount == null) {
            return console.log('Obrigatorio o preenchimento do campo quantidade')
        } else {
            let findBarcode = stock.reduce((acc, stockBarcode) => {
                if (stockBarcode.barcode == barcode) {
                    if (amount > stockBarcode.amountProduct) {
                        console.log(`Temos somente ${stockBarcode.amountProduct} item(s) do produto ${stockBarcode.nameProduct}`);
                    } else {
                        stockBarcode.amountProduct = stockBarcode.amountProduct - amount;
                        console.log(stockBarcode.nameProduct);
                        retorno = true;
                    }
                }
            }, 0)
            typeof(findBarcode);
            return retorno
        };
    }
    addItemsBox(barcode, amount, nameClient) {
        if (this.checkAmountStock(barcode, amount) ) {
        if (barcode == null) {
            return console.log('Obrigatorio o preenchimento do campo Código de Barra')
        } else if (amount == null) {
            return console.log('Obrigatorio o preenchimento do campo quantidade')
        } else {
            let findBarcode = stock.reduce((acc, stockBarcode) => {
                if (stockBarcode.barcode == barcode) {
                    productRegister.push({
                        barcode: Number(barcode),
                        amount: Number(amount),
                        price: Number(stockBarcode.price),
                        nameProduct: String(stockBarcode.nameProduct),
                        nameClient: nameClient,
                        amount: Number(amount)
                    });
                }
            }, 0)
        };
        } else {
            console.log('Item não adicionado o estoque por não ter a quantidade desejada!')
            return true;
        }
    }
    total() {
        let total = productRegister.reduce((acc, totalPrice) => {
            let calc = (totalPrice.amount * totalPrice.price);
            return acc + calc;
        }, 0)
        return (total)
    }
    payment(money, nameClient = this.nameClient) {
        const total = this.total()
        const payment = money - total
        if (Math.sign(payment) != -1) {
            localStorage.setItem(nameClient ,JSON.stringify(productRegister));
            productRegister = [];
            inputValues.innerHTML = '';
            inputValues.innerHTML = '<p id="inputData"></p><p id="totalcompras"></p><p id="quantidade"></p><p id="fecharcompras"></p>'
            return payment
        } else {
            return ('valor insuficiente')
        }
    }
}
caixaRegistradora = new CaixaRegistradora()

function mountProductlist() {
    let Productlist = document.getElementById("Productlist");
    let ul = document.getElementById("list");
    Productlist.removeChild(ul);
    Productlist.appendChild(ul);
    ul.innerHTML = '';
    stock.forEach((product) => {
        const li = document.createElement("li");
        li.innerHTML = (`<b>Produto:</b> ${product.nameProduct} => <b>Código de barra:</b> ${product.barcode} => <b>Preço:</b> ${product.price} => <b>Quantidade:</b> ${product.amountProduct}`);
        ul.appendChild(li);
    });
}
mountProductlist()
setInterval(mountProductlist, 1000)

function listitenscaixa() {
    let itensCaixa = document.getElementById("itensCaixa");
    let ul = document.getElementById("listcaixa");
    itensCaixa.removeChild(ul);
    itensCaixa.appendChild(ul);
    ul.innerHTML = '';
    productRegister.forEach((product) => {
        const li = document.createElement("li");
        li.innerHTML = (`<b>Produto:</b> ${product.nameProduct} => <b>Código de barra:</b> ${product.barcode} => <b>Preço:</b> ${product.price} => <b>Quantidade:</b> ${product.amount}`);
        ul.appendChild(li);
    });
}

setInterval(listitenscaixa, 1000)

function addProductStock() {
    const inputData = document.getElementById("inputData")

    inputData.innerHTML = (`<label for="productName">Entre com o nome do produto.</label>
                            <input type="text" name="productName" id="productName" placeholder="Batata" />
                            <label for="productBarcode">Entre com o código de barra.</label>
                            <input type="number" name="productBarcode" id="productBarcode" placeholder="123123" />
                            <label for="productPrice">Entre com o preço.</label>
                            <input type="number" name="productPrice" id="productPrice" placeholder="10" /><br>
                            <label for="amountProduct">Entre com o preço.</label>
                            <input type="number" name="amountProduct" id="amountProduct" placeholder="10" /><br>
                            <button onclick="AddProduct()" type="button">Adicionar</button>`);
}
function AddProduct() {
    const inputData = document.getElementById("inputData");
    const productName = document.getElementById("productName").value;
    const productBarcode = document.getElementById("productBarcode").value;
    const productPrice = document.getElementById("productPrice").value;
    const amountProduct = document.getElementById("amountProduct").value;

    if (productBarcode == '' || productName == '' || productPrice == '' || amountProduct == '') {
        document.getElementById("inputData").innerHTML = (`Todos campos devem ser preenchidos`)
    } else {
        caixaRegistradora.addProduct(productName, productPrice, productBarcode, amountProduct);
        inputData.innerHTML = ''
    }
}

function addStartService() {
    const inputData = document.getElementById("inputData")

    if (caixaRegistradora.nameClient == undefined) {
        inputData.innerHTML = (`<label for="clientName">Entre com o nome do cliente.</label>
                            <input type="text" name="clientName" id="clientName" placeholder="Nome do Cliente." /><br>
                            <button onclick="checkClientName()" type="button">Adicionar</button>`);
    } else {
        checkClientName(caixaRegistradora.nameClient)
    }
}
let clientName = '';
function checkClientName(nameClient) {

    if (caixaRegistradora.nameClient == undefined) {
        clientName = document.getElementById("clientName").value
    } else {
        clientName = caixaRegistradora.nameClient;

    }

    if (clientName == '') {
        document.getElementById("inputData").innerHTML = (`Todos campos devem ser preenchidos`)
    } else {
        console.log(clientName)
        caixaRegistradora.startService(clientName)
        inputData.innerHTML = ''
        addItems()
    }
}

function addItems() {
    const inputData = document.getElementById("inputData")

    inputData.innerHTML = (`
                            <label for="productBarcode">Entre com o código de barra.</label>
                            <input type="number" name="productBarcode" id="productBarcode" placeholder="Batata" />
                            <label for="amountItems">Entre com a quantidade do produto.</label>
                            <input type="number" name="amountItems" id="amountItems" placeholder="Quantidade" />
                            <button onclick="AddProductBox()" type="button">Adicionar</button>`);
}

function AddProductBox() {
    const inputData = document.getElementById("inputData");
    const productBarcode = document.getElementById("productBarcode").value;
    const amountItems = document.getElementById("amountItems").value;
    const valorTotal = document.getElementById("totalcompras");
    const quantidade = document.getElementById("quantidade");

    if (productBarcode == '' || amountItems == '') {
        document.getElementById("inputData").innerHTML = (`Todos campos devem ser preenchidos`)
    } else {
        if ( caixaRegistradora.addItemsBox(productBarcode, amountItems) ){
            quantidade.innerHTML = 'Produto com estoque insuficiente!';
        } else {
            quantidade.innerHTML = ' ';
        };
        const totalizador = caixaRegistradora.total()
        valorTotal.innerHTML = '<b>Total a pagar: </b>' + totalizador + '<br><button onclick="fecharconta()" type="button">Fechar Conta</button>';
        console.log(productRegister);
    }
}

function fecharconta(){
    const fecharcompras = document.getElementById("fecharcompras");
    const quantidade = document.getElementById("quantidade");
    quantidade.innerHTML = '';
    fecharcompras.innerHTML = (`
    <label for="pagamento">Entre com o valor do Pagamento</label>
    <input type="number" name="pagamento" id="pagamento" placeholder="20" />
    <button onclick="finalizar()" type="button">Finalizar</button>`);
}

function finalizar(){
    const fecharcompras = document.getElementById("fecharcompras");
    const valor = document.getElementById("pagamento").value;
    fecharcompras.innerHTML = caixaRegistradora.payment(valor);
}