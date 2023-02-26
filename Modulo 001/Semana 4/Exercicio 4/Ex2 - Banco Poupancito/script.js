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
    checkPasswordWithdraw(password) {
        if (this.#checkPassword(password)) {
            return 0
        } else {
            return -1
        }
    }
    saldo() {
        return this.balance;
    }
}
const contaCorrente = new account(0, passwordAccount);

document.getElementById('password').innerHTML = (`Senha: ${passwordAccount}`)

function atulizaSaldoTela() {
    document.getElementById('saldo').innerHTML = (`Saldo: ${contaCorrente.saldo()}`)
}
atulizaSaldoTela()

function deposita() {
    let valor = document.getElementById('valor').value
    valor = parseInt(valor);
    const senha = document.getElementById('senha').value
    if (contaCorrente.checkPasswordWithdraw(senha) == -1) {
        document.getElementById('saldo').innerHTML = (`Senha inválida`)
    } else {
        if (contaCorrente.deposit(valor, senha) == -1) {
            document.getElementById('saldo').innerHTML = (`Senha inválida`)
        }
        atulizaSaldoTela()
    }
}

function retira() {
    let valor = document.getElementById('valor').value
    valor = parseInt(valor);
    const senha = document.getElementById('senha').value

    if (contaCorrente.checkPasswordWithdraw(senha) == -1) {
        document.getElementById('saldo').innerHTML = (`Senha inválida`)
    } else {
        if (contaCorrente.saldo() < valor) {
            document.getElementById('saldo').innerHTML = (`Seu saldo é menor que o valor solicitado, saldo: ${contaCorrente.saldo()}`)
        } else {
            contaCorrente.withdraw(valor, senha);
            atulizaSaldoTela()
        }
    }
}

