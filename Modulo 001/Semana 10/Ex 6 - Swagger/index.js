require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const port = 3333;

const connection = require("./src/database");
const tasksRoutes = require("./src/routes/tasks");
const usersRoutes = require("./src/routes/user");

connection.authenticate();
connection.sync({ alter: true });

app.use(tasksRoutes);
app.use(usersRoutes);

app.listen(port, () =>
  console.log(`Aplicação inicializada e escutando na porta ${port}`)
);
