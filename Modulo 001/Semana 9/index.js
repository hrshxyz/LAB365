const express = require("express");
const app = express();
app.use(express.json());
const port = 3333;

const tarefas = [];

app.get("/", (_, res) => {
  res.json("OK!");
});

app.post("/tasks", (req, res) => {
  const tarefa = {
    name: req.body.name,
    description: req.body.description,
  };

  tarefas.push(tarefa);
  res.status(201).json(tarefa);
});

app.get("/tasks", (_, res) => {
  res.status(200).json(tarefas);
});

app.listen(port, () => console.log(`Aplicação online, porta ${port}`));
