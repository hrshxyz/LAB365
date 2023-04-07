const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
app.use(express.json());
const port = 3333;

const connection = require("./src/database");
const Place = require("./src/models/place");
const User = require("./src/models/user");

connection.authenticate();
connection.sync({ alter: true });

app.post("/places", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      telefone: req.body.telefone,
      openinghours: req.body.openinghours,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    };

    if (!data.name || !data.telefone) {
      return res
        .status(406)
        .json({ message: "Campos Obrigatórios, name e telefone." });
    }

    const nameExist = await Place.findOne({ where: { name: data.name } });
    if (nameExist) {
      return res.status(400).json({ message: "Local já cadastrado." });
    }

    const place = await Place.create(data);
    res.status(201).json(place);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.get("/places", async (_, res) => {
  try {
    const places = await Place.findAll();
    return res.json(places);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.delete("/places/:id", async (req, res) => {
  try {
    const idPlace = req.params.id;

    if (!idPlace) {
      return res.status(204).json({ message: "ID não existe!" });
    }

    const placeDelete = await Place.destroy({ where: { id: idPlace } });
    if (placeDelete) {
      return res.status(202).json();
    } else {
      return res.status(406).json({ message: "ID não existe!" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.put("/places/:id", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      telefone: req.body.telefone,
      openinghours: req.body.openinghours,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    };

    const idPlace = req.params.id * 1;
    const checkId = await Place.findByPk(idPlace);

    if (!checkId) {
      return res.status(404).json({ message: "ID não existe!" });
    }

    if (!data.name || !data.telefone) {
      return res
        .status(406)
        .json({ message: "Campos Obrigatórios, name e telefone." });
    }

    const nameExist = await Place.findOne({
      where: { name: data.name },
    });

    if (nameExist) {
      if (nameExist.id !== idPlace) {
        return res.status(400).json({ message: "Local já cadastrado." });
      }
    }

    const updatePlaceName = await Place.update(
      { name: data.name },
      { where: { id: idPlace } }
    );

    const updatePlaceTelefone = await Place.update(
      { telefone: data.telefone },
      { where: { id: idPlace } }
    );

    if (data.openinghours) {
      const updatePlaceOpeninghours = await Place.update(
        { openinghours: data.openinghours },
        { where: { id: idPlace } }
      );
    }

    if (data.description) {
      const updatePlacedescription = await Place.update(
        { description: data.description },
        { where: { id: idPlace } }
      );
    }

    if (data.latitude) {
      const updatePlacedlatitude = await Place.update(
        { latitude: data.latitude },
        { where: { id: idPlace } }
      );
    }

    if (data.longitude) {
      const updatePlacedlongitude = await Place.update(
        { longitude: data.longitude },
        { where: { id: idPlace } }
      );
    }

    res.status(204).json(updatePlaceName);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };

    if (!user.name || !user.email || !user.username) {
      return res.status(406).json({ message: "Invalid Fields" });
    }
    console.log(user.password.length);
    if (user.password.length <= 8) {
      return res
        .status(406)
        .json({ message: "Senha deve conter outo caracteres ou mais!" });
    }

    const usernameExist = await User.findOne({
      where: { username: req.body.username },
    });
    if (usernameExist) {
      return res.status(400).json({ message: "Usuário já existe!" });
    }

    const emailExist = await User.findOne({
      where: { email: req.body.email },
    });
    if (emailExist) {
      return res.status(400).json({ message: "E-mail já existe!" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    user.password = hashedPassword;

    const newUser = await User.create(user).catch((errors) => {
      return res.json({ message: "E-mail Inválido" });
    });
    const { password, ...rest } = newUser.toJSON();
    res.status(201).json(rest);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
});

app.listen(port, () =>
  console.log(`Aplicação inicializada e escutando na porta ${port}`)
);
