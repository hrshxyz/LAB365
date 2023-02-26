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

const poupancaPremium = new PoupancaPremium(0, passwordAccount)

document.getElementById('password').innerHTML = (`Senha: ${passwordAccount}`)

function atulizaSaldoTela() {
    document.getElementById('saldo').innerHTML = (`Saldo: ${poupancaPremium.saldo()}`)
}
atulizaSaldoTela()

function deposita() {
    let valor = document.getElementById('valor').value
    valor = parseInt(valor);
    const senha = document.getElementById('senha').value
    if (poupancaPremium.checkPasswordWithdraw(senha) == -1) {
        document.getElementById('saldo').innerHTML = (`Senha inválida`)
    } else {
        if (poupancaPremium.deposit(valor, senha) == -1) {
            document.getElementById('saldo').innerHTML = (`Senha inválida`)
        }
        atulizaSaldoTela()
    }
}

function retira() {
    let valor = document.getElementById('valor').value
    valor = parseInt(valor);
    const senha = document.getElementById('senha').value

    if (poupancaPremium.checkPasswordWithdraw(senha) == -1) {
        document.getElementById('saldo').innerHTML = (`Senha inválida`)
    } else {
        if (poupancaPremium.saldo() < valor) {
            document.getElementById('saldo').innerHTML = (`Seu saldo é menor que o valor solicitado, saldo: ${poupancaPremium.saldo()}`)
        } else {
            poupancaPremium.withdraw(valor, senha);
            atulizaSaldoTela()
        }
    }
}

function atualizaJuros() {
    const senha = document.getElementById('senha').value
    if (poupancaPremium.checkPasswordWithdraw(senha) == -1) {
        document.getElementById('saldo').innerHTML = (`Senha inválida`)
    } else {
        poupancaPremium.atualizaJuros()
        atulizaSaldoTela()
    }
}