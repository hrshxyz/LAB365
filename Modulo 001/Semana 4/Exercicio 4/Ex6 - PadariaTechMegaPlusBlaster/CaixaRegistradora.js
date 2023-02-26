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
            return console.log('Obrigatorio passar o nome do cliente para iniciar o atendimento')
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
    addItemsBox(barcode, amount) {
        if (this.checkAmountStock(barcode, amount) ) {
            if (barcode == null) {
                return console.log('Obrigatorio o preenchimento do campo Código de Barra')
            } else if (amount == null) {
                return console.log('Obrigatorio o preenchimento do campo quantidade')
            } else {
                let findBarcode = stock.reduce((acc, stockBarcode) => {
                    if (stockBarcode.barcode == barcode) {
                        productRegister.push({
                            nameProduct: String(stockBarcode.nameProduct),
                            price: Number(stockBarcode.price),
                            barcode: Number(barcode),
                            amount: Number(amount)
                        });
                    }
                }, 0)
            };
        } else {
            console.log('Item não adicionado o estoque por não ter a quantidade desejada!')
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
            return payment
        } else {
            return ('valor insuficiente')
        }
    }
}
caixaRegistradora = new CaixaRegistradora()

const name = caixaRegistradora.startService('teste')
caixaRegistradora.addProduct('batata', 6, 123123, 50);
caixaRegistradora.addItemsBox(124001, 20);
caixaRegistradora.addItemsBox(123123, 50);
caixaRegistradora.addItemsBox(123000, 3);
console.log(stock)
const totalizador = caixaRegistradora.total();
console.log(`Total - ${totalizador}`)
console.log(caixaRegistradora.payment(306))
console.log(productRegister);
