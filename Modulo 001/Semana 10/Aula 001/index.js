const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const connection = require("./src/database");
const Task = require("./src/models/task");
const User = require("./src/models/user");

const app = express();
const port = 3333;
app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

function verifyJWT(req, res, next) {
  var token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  jwt.verify(token, "ea124657db48b5ad97ea76cdbbc702", function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}

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
    const userExist = await User.findOne({ where: { cpf: req.body.cpf } });
    if (userExist) {
      return res
        .status(400)
        .json({ message: "Já existe um usuário com este cpf!" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const user = {
      name: req.body.name,
      cpf: req.body.cpf,
      password: hashedPassword,
    };

    if (!user.name || !user.password) {
      return res.status(406).json({ message: "Invalid Fields" });
    }

    /*    const newUser = await User.create(user);
    const userWithoutPassword = newUser.toJSON();
    delete userWithoutPassword.password;
    res.status(201).json(userWithoutPassword); */

    const newUser = await User.create(user);
    const { password, ...rest } = newUser.toJSON();
    res.status(201).json(rest);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

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
      "ea124657db48b5ad97ea76cdbbc702",
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
