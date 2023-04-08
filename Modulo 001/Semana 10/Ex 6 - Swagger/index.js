require("dotenv").config();
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./src/swagger/swagger.json");

const app = express();
app.use(express.json());

const port = 3333;

const connection = require("./src/database");
const tasksRoutes = require("./src/routes/tasks");
const usersRoutes = require("./src/routes/user");

connection.authenticate();
connection.sync({ alter: true });

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/v1", tasksRoutes);
app.use("/v1", usersRoutes);

app.listen(port, () =>
  console.log(`Aplicação inicializada e escutando na porta ${port}`)
);
