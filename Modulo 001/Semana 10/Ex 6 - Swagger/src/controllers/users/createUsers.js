const User = require("../../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function createUsers(req, res) {
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
    if (user.password.length < 8) {
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
}

module.exports = createUsers;
