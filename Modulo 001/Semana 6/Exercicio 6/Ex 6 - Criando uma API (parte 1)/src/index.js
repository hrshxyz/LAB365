const express = require('express');
const app = express();
app.use(express.json())

let users = [
    { id: 1, nome: "teste" },
    { id: 2, nome: "hrs" },
    { id: 3, nome: "fdfdfdf" }
];

app.get('/users', (req, res) => {
    res.send(users)
})

app.patch('/users/:id/:nome', (req, res) => {
    let id = req.params.id * 1;

    let userExist = users.filter((user) => {
        return user.id == id;
    });

    if (userExist.length) {
        res.status(226).send("ID já existe")
    } else {
        users.push({"id": id , "nome": req.params.nome})
        res.status(201).send("ID Adicionado")
        console.log(id, req.params.nome)
    }
})


app.delete('/users/:id', (req, res) => {
    let id = req.params.id * 1;
    let idDelete = users.find(idDel => idDel.id === id);
    let index = users.indexOf(idDelete);
    console.log(index)
    console.log(idDelete)

    if (idDelete) {
        users.splice(index, 1)
        res.status(200).send("ID deleteado")
    } else {
        res.status(404).send("ID não encontrado!")
    }
})
app.listen(3333, () => {
    console.log('Servidor online!!');
});