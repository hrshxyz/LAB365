const express = require('express');
const app = express();
const port = 3333;

app.use(express.json())

let users = [];

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/user', (req, res, next) => {
    const { cargo } = req.body;
    const cargoLowerCase = cargo.toLowerCase();

    if (cargoLowerCase === "líder") {
        next();
    } else {
        res.status(406).json({ "mensagem": "Cargo não é igual a Líder!" });
        return;
    };
},
    (req, res) => {
        const { nome, idade, cargo, senha } = req.body;

        if (Object.keys(req.body).length < 4) {
            res.status(406).json({ "mensagem": "Está faltando dados para concluir a operação" });
            return;
        };

        if (idade < 21) {
            res.status(401).json({ "mensagem": "Usuário não possui idade suficiente" });
            return;
        };

        let idPost = users.length + 1;
        users.push({ "id": idPost, "nome": nome, "idade": idade, "cargo": cargo, "senha": senha });
        res.status(200).json({ "mensagem": "Criado com sucesso" });
    });

app.delete('/user', (req, res) => {
    let id = req.query.id * 1;

    if (!id) {
        res.status(406).json({ "mensagem": "Está faltando dados para concluir a operação" });
        return;
    };

    let idDelete = users.find(idDel => idDel.id === id);
    let index = users.indexOf(idDelete);

    if (idDelete) {
        users.splice(index, 1);
        res.status(200).send("ID deleteado");
    } else {
        res.status(406).send("ID não encontrado!");
    };
});

app.listen(port, () => {
    console.log(`Servidor online!, url: http://localhost:${port}`);
});