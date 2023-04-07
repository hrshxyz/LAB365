// https://github.com/FullStack-Trindade/api_my_tasks/tree/importacao-router

require("dotenv").config();
const express = require("express");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = process.env.SALTROUNDS;

const connection = require("./src/database");
const Task = require("./src/models/task");
const User = require("./src/models/user");
const log = require("./src/middlewares/log");
const validateNewUser = require("./src/middlewares/validateNewUser");
const validateToken = require("./src/middlewares/validateToken");
const createTasks = require("./src/controllers/tasks/createTaks");
const findTasks = require("./src/controllers/tasks/findTasks");
const createUser = require("./src/controllers/users/createUser");

const app = express();
const port = 3333;

app.use(express.json());
//app.use(log);

connection.authenticate();
connection.sync({ alter: true });

app.get("/", (_, res) => {
  try {
    res.json("OK!");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.post("/tasks", validateToken, createTasks); 

app.get("/tasks", validateToken, findTasks) 

app.delete("/tasks/:id", validateToken, async (req, res) => {
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

app.put("/tasks/:id", validateToken, async (req, res) => {
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

app.post("/users", validateNewUser, createUser)

app.post("/users/login", async (req, res) => {
  try {
    const userInDatabase = await User.findOne({
      where: { cpf: req.body.cpf },
    });

    if (!userInDatabase) {
      return res.status(404).json({ message: "Credenciais incorretas!" });
    }

    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      userInDatabase.password
    );

    if (!passwordIsValid) {
      return res.status(404).json({ message: "Credenciais incorretas!" });
    }

    const token = jwt.sign(
      { id: userInDatabase.id },
      process.env.SECRET_TOKEN,
      { expiresIn: "600s" }
    );

    res.status(200).json({ username: userInDatabase.name, token: token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.listen(port, () => console.log(`Aplicação online, porta ${port}`));
