const stock = [
    {
        nameProduct: "Pao",
        price: 2,
        barcode: 123000
    },
    {
        nameProduct: "beterraba",
        price: 4,
        barcode: 124001
    }
];

let productRegister = [];
let searchOk = 0;

class CaixaRegistradora {
    constructor(nameProduct, price, barcode, nameClient) {
        this.nameProduct = nameProduct
        this.price = price
        this.barcode = barcode
        this.nameClient = nameClient
    }

    addProduct(nameProduct, price, barcode) {
        if (nameProduct == '') {
            return console.log('Obrigatorio o preenchimento do campo nameProduct')
        } else if (price == null) {
            return console.log('Obrigatorio o preenchimento do campo preço')
        } else if (barcode == null) {
            return console.log('Obrigatorio o preenchimento do campo Código de Barra')
        } else {
            stock.push({
                nameProduct: String(nameProduct),
                price: Number(price),
                barcode: Number(barcode)
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
    addItemsBox(barcode, amount, nameClient = this.nameClient) {
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
                        nameClient: nameClient
                    });
                }
            }, 0)
        };
    }
    total() {
        let total = productRegister.reduce((acc, totalPrice) => {
            let calc = (totalPrice.amount * totalPrice.price);
            return acc + calc;

        }, 0)
        return (total)
    }
    payment(money) {
        const total = this.total()
        const payment = money - total
        if (Math.sign(payment) != -1) {
            productRegister = [];
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
        li.innerHTML = (`<b>Produto:</b> ${product.nameProduct} => <b>Código de barra:</b> ${product.barcode} => <b>Preço:</b> ${product.price}`);
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
                            <input type="number" name="productBarcode" id="productBarcode" placeholder="Batata" />
                            <label for="productPrice">Entre com o preço.</label>
                            <input type="number" name="productPrice" id="productPrice" placeholder="Batata" /><br>
                            <button onclick="AddProduct()" type="button">Adicionar</button>`);
}
function AddProduct() {
    const inputData = document.getElementById("inputData");
    const productName = document.getElementById("productName").value;
    const productBarcode = document.getElementById("productBarcode").value;
    const productPrice = document.getElementById("productPrice").value;

    if (productBarcode == '' || productName == '' || productPrice == '') {
        document.getElementById("inputData").innerHTML = (`Todos campos devem ser preenchidos`)
    } else {
        caixaRegistradora.addProduct(productName, productPrice, productBarcode);
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

    if (productBarcode == '' || amountItems == '') {
        document.getElementById("inputData").innerHTML = (`Todos campos devem ser preenchidos`)
    } else {
        caixaRegistradora.addItemsBox(productBarcode, amountItems);
        inputData.innerHTML = ''
        console.log(productRegister);
    }
}


/* caixaRegistradora.addItemsBox(124001, 1);
caixaRegistradora.addItemsBox(123000, 3);
caixaRegistradora.addItemsBox(123123, 1);
caixaRegistradora.addItemsBox(124001, 1);
console.log(productRegister);
const totalizador = caixaRegistradora.total();
console.log(totalizador)
console.log(caixaRegistradora.payment(20))
console.log(productRegister); */