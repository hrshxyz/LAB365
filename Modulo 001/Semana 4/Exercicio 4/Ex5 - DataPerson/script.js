class Person {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    imprimir() {
        return(`Olá, me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura.`)
    }
}

class Profissional extends Person {
    constructor(nome, idade, altura, funcao) {
        super(nome, idade, altura);
        this.funcao = funcao;
    }
    profissao() {
        return (`Olá, me chamo ${this.nome} tenho ${this.idade} anos, tenho ${this.altura} de altura e minha profissão é ${this.funcao}.`)
    }
}

function geraPessoal() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let altura = document.getElementById('altura').value;
    const person = new Person(nome,idade,altura);
    document.getElementById('pessoal').innerHTML = person.imprimir();
};

function geraProfissional() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let altura = document.getElementById('altura').value;
    let profissao = document.getElementById('profissao').value;
    const profissional = new Profissional(nome,idade,altura,profissao);
    document.getElementById('profissional').innerHTML = profissional.profissao();
};