(async () => {
    const database = require('./db');
    const Lista = require('./lista')
    await database.sync();

    const novaLista = await Lista.create({
        tarefa: 'Comprar livros',
        descricao: 'Livro de matemática'
    });

    const listas = await Lista.findByPk(1);
    listas.descricao='Livro de matemática e Inglês';
    await listas.save();
    
    console.log(listas)
})();