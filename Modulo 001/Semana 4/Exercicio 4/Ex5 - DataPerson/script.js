class Person {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    imprimir() {
        console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura.`)
    }
}

class Profissional extends Person{
    constructor(nome, idade, altura, funcao){
        super(nome, idade, altura);
        this.funcao = funcao;
    }
    profissao() {
        console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura e minha profissão é ${this.funcao}.`)
    }
}

const person = new Person('Henrique','39','1.78');
person.imprimir()

const profissional = new Profissional('Henrique','39','1.78','Plataform Engineer');
profissional.profissao()