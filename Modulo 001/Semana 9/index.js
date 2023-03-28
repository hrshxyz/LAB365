const express = require("express");
const app = express();
app.use(express.json());
const port = 3333;

app.get("/", (req, res) => {
  res.json("OK!");
  console.log("Entrei aqui.");
});

app.post("/tasks", (req, res) => {
  console.log(req.body);
  res.json({ message: "Tudo Certo!" });
});

app.listen(port, () => console.log(`Aplicação online, porta ${port}`));
