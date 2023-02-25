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

    addProduct(nameProduct, price, barcode){
        if ( nameProduct == '' ) {
            return console.log('Obrigatorio o preenchimento do campo nameProduct') 
        } else if( price == null ) {
            return console.log('Obrigatorio o preenchimento do campo preço') 
        } else if ( barcode == null ) {
            return console.log('Obrigatorio o preenchimento do campo Código de Barra') 
        } else {
            stock.push({
                nameProduct: String(nameProduct),
                price: Number(price),
                barcode: Number(barcode)
            });
        };
    };
    startService(nameClient){
        if ( nameClient == '' ) {
            return console.log('Obrigatorio passar o nome do cliente para iniciar o atendimento') 
        } else {
            return this.nameClient = nameClient;
        }
    }
    addItemsBox(barcode,amount){
        if ( barcode == null ) {
            return console.log('Obrigatorio o preenchimento do campo Código de Barra') 
        } else if( amount == null ) {
            return console.log('Obrigatorio o preenchimento do campo quantidade') 
        } else {
              let findBarcode = stock.reduce((acc, stockBarcode)=>{
                if (stockBarcode.barcode == barcode) { 
                    productRegister.push({
                        barcode: Number(barcode),
                        amount: Number(amount),
                        price: Number(stockBarcode.price)
                    });
                }
            },0)
        }; 
    }
    total(){
        let total = productRegister.reduce((acc, totalPrice)=>{
              let calc = (totalPrice.amount * totalPrice.price);
              return acc + calc;

        },0)
        return(total)
    }
    payment(money){
        const total = this.total()
        const payment = money - total
        if ( Math.sign(payment) != -1 ) {
            productRegister = [];
            return payment
        } else {
            return ('valor insuficiente')
        }
    }
}
caixaRegistradora = new CaixaRegistradora()

const name = caixaRegistradora.startService('teste')
caixaRegistradora.addProduct('batata',6,123123);
caixaRegistradora.addItemsBox(124001,1);
caixaRegistradora.addItemsBox(123000,3);
caixaRegistradora.addItemsBox(123123,1);
caixaRegistradora.addItemsBox(124001,1);
console.log(productRegister);
const totalizador  = caixaRegistradora.total();
console.log(totalizador)
console.log(caixaRegistradora.payment(20))
console.log(productRegister);