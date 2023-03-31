const express = require("express");
const connection = require("./src/database");
const Task = require("./src/models/task");

const app = express();
app.use(express.json());
const port = 3333;

//const tasks = [];

connection.authenticate();
connection.sync();

app.get("/", (_, res) => {
  try {
    res.json("OK!");
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const task = {
      name: req.body.name,
      description: req.body.description,
    };

    if (!task.name || !task.description) {
      return res.status(406).json({ message: "Invalid Fields" });
    }

    //tasks.push(task);
    /*   Task.create(task).then((insert_task) => {
      res.status(201).json(insert_task);
    }); */

    // fazer a checagem se o nome da tarefa já existe no banco de dados.
    // fazer um if para validar
    name = task.name;
    const taskExist = await Task.findOne({ where: { name } });
    if (taskExist) {
      return res
        .status(400)
        .json({ error: "Já existe uma tarefa com este nome" });
      console.log(taskExist);
    }
    
    const newTask = await Task.create(task);
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.get("/tasks", async (_, res) => {
  try {
    await Task.findAll().then((tasks) => {
      res.status(200).json(tasks);
    });
    /*   const getTasks = await Task.findAll();
    res.status(200).json(getTasks); */
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.listen(port, () => console.log(`Aplicação online, porta ${port}`));
