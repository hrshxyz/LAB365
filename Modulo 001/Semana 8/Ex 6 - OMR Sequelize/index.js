(async () => {
    const database = require('./db');
    const Lista = require('./lista')
    await database.sync();

    const listas = await Lista.findOne({ where: { descricao: 'Livro de matemática' } });
    if (listas){
        await listas.destroy();
    }

    console.log(listas)
})();