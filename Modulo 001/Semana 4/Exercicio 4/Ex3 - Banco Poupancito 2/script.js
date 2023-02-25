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

const contaCorrente = new account(0, passwordAccount);
contaCorrente.deposit(100, '12qwas');
contaCorrente.withdraw(14, '12qwas');
console.log(contaCorrente.saldo());