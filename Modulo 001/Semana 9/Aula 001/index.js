const express = require("express");
const connection = require("./src/database");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Task = require("./src/models/task");
const User = require("./src/models/user");

const app = express();
app.use(express.json());
const port = 3333;

connection.authenticate();
connection.sync();

app.get("/", (_, res) => {
  try {
    res.json("OK!");
  } catch (error) {
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
    const taskExist = await Task.findOne({ where: { name: task.name } });
    if (taskExist) {
      return res
        .status(400)
        .json({ message: "Já existe uma tarefa com este nome" });
    }

    const newTask = await Task.create(task);
    res.status(201).json(newTask);
  } catch (error) {
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
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const idTask = req.params.id;

    if (!idTask) {
      return res.status(204).json({ message: "Item não existe!" });
    }

    const taskDelete = await Task.destroy({ where: { id: idTask } });
    if (taskDelete) {
      return res.status(202).json();
    } else {
      return res.status(406).json({ message: "Item não existe!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.put("/tasks/:id", async (req, res) => {
  try {
    const taskInDatabase = await Task.findByPk(req.params.id);
    if (!taskInDatabase) {
      return res.status(404).json({ message: "Tarefa não encontrada!" });
    }

    taskInDatabase.name = req.body.name || taskInDatabase.name;
    taskInDatabase.description = req.body.description;

    await taskInDatabase.save();

    res.json(taskInDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      cpf: req.body.cpf,
      password: req.body.password,
    };

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(user.password, saltRounds, function (err, hash) {
        return hash;
      });
    });
    console.log(user.password);
    if (!user.name || !user.cpf || !user.password) {
      return res.status(406).json({ message: "Invalid Fields" });
    }

    const userExist = await User.findOne({ where: { cpf: user.cpf } });
    if (userExist) {
      return res
        .status(400)
        .json({ message: "Já existe um usuário com este cpf!" });
    }

    const newUSer = await User.create(user);
    res.status(201).json(newUSer);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.listen(port, () => console.log(`Aplicação online, porta ${port}`));
