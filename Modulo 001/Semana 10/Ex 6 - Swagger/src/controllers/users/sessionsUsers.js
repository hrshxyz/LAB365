const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function sessionsUsers(req, res) {
  try {
    const usernameInDatabase = await User.findOne({
      where: { username: req.body.username },
    });

    if (!usernameInDatabase) {
      return res.status(404).json({ message: "Credenciais incorretas!" });
    }

    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      usernameInDatabase.password
    );

    if (!passwordIsValid) {
      return res.status(404).json({ message: "Credenciais incorretas!" });
    }

    const token = jwt.sign(
      { id: usernameInDatabase.id },
      process.env.SECRET_TOKEN,
      { expiresIn: "600s" }
    );

    res.status(200).json({ username: usernameInDatabase.name, token: token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
}

module.exports = sessionsUsers;
