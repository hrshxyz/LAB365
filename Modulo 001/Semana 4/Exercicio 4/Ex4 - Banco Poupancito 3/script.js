const passwordAccount = '12qwas'

class account {
    #password;
    constructor(balance, password) {
        this.balance = balance;
        this.#password = password;
    }
    #checkPassword(password, currentPassword = this.#password) {
        if (password === currentPassword) {
            return true
        } else {
            return false
        };
    }
    deposit(money, password, balance = this.balance) {
        if (this.#checkPassword(password)) {
            this.balance = (balance + money)
        } else {
            return -1
        };
    }
    withdraw(money, password, balance = this.balance) {
        if (this.#checkPassword(password)) {
            this.balance = (balance - money)
        } else {
            return -1
        };
    }
    saldo() {
        return this.balance;
    }
}

class ContaPoupanca extends account{
    constructor(balance, password, deposit, withdraw, saldo, juros){
        super(balance, password, deposit, withdraw, saldo);
        this.juros = juros;
    }
    atualizaJuros(){
        return this.balance = (this.saldo() + (this.saldo() * 0.7 / 100))
    }

}

class PoupancaPremium extends ContaPoupanca{
    constructor(balance, password, deposit, withdraw, saldo, juros){
        super(balance, password, deposit, withdraw, saldo);
        this.juros = juros;
    }
    atualizaJuros(){
        return this.balance = (this.saldo() + (this.saldo() * 1.2 / 100))
    }

}

const contaCorrente = new account(0, passwordAccount);
contaCorrente.deposit(100, '12qwas');
contaCorrente.withdraw(14, '12qwas');
console.log(`Saldo da conta corrente: ${contaCorrente.saldo()}`);

const contaPoupanca = new ContaPoupanca(0, passwordAccount)
contaPoupanca.deposit(100, '12qwas');
console.log(`Saldo da conta poupança: ${contaPoupanca.atualizaJuros()}`)
console.log(`Saldo da conta poupança: ${contaPoupanca.atualizaJuros()}`)

const poupancaPremium = new PoupancaPremium(0, passwordAccount)
poupancaPremium.deposit(100, '12qwas');
console.log(`Saldo da conta poupança premium: ${poupancaPremium.atualizaJuros()}`)
console.log(`Saldo da conta poupança premium: ${poupancaPremium.atualizaJuros()}`)