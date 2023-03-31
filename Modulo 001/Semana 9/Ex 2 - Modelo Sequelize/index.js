const express = require("express");
const app = express();
app.use(express.json());
const port = 3333;
const connection = require("./src/database");
const Place = require("./src/models/task");

connection.authenticate();
connection.sync();

app.listen(port, () => console.log(`Aplicação inicializada e escutando na porta ${port}`));
