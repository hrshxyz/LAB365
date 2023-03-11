const express = require('express');
const app = express();
app.use(express.json())

app.get('/list', (req, res) => {
    console.log('teste')
    /*     res.send('Resposta ok!') */
    res.send("<div style='background-color:red'>Requisição OK!</div>")
})

app.get('/getuser/:id/:nome', (req, res) => {
    console.log(req.params.id, req.params.nome)
    /* res.send("<div style='background-color:red'>Requisição OK!</div>") */
    res.status(418).send("{id:" + req.params.id + ", nome:" + req.params.nome + "}")
})

app.post('/create', (req, res) => {
    console.log(req.body)
    res.json(req.body);
})

// Exercício da Aula
app.get('/ola/:nome', (req, res) => {
    res.status(200).send("Olá, meu nome é " + req.params.nome)
})

app.delete('/deleteuser/:id', (req, res) => {

/*     if ( req.params['id']) {
        res.status(202).send("Não é numero")
    } */

    let users = [
        { id: 1, nome: "teste" },
        { id: 2, nome: "hrs" },
        { id: 3, nome: "fdfdfdf" }
    ];

    let achou = users.filter((usuario) => {
        return usuario.id == req.params.id;
    });
    if (achou.length) {
        res.status(200).send("ID deleteado " + JSON.stringify(achou))//+ req.params.id + JSON.stringify(users))
    } else {
        res.status(404).send("ID não encontrado!")
    }
})
app.listen(3333, () => {
    console.log('Servidor online!!');
});