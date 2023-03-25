(async () => {
    const database = require('./db');
    const Equipamento = require('./equipamento')
    await database.sync();

    const novoEquipamento = await Equipamento.create({
        nome: 'Bicicleta',
        preco: 10000,
        descricao: '21 marchas'
    });

    //console.log(novoEquipamento);
    //const equipamentos = await Equipamento.findAll();
    const equipamentos = await Equipamento.findByPk(2);
    console.log(equipamentos)

    equipamentos.descricao='Fiz uma alteração 3';
    await equipamentos.save();

    await equipamentos.destroy()
})();