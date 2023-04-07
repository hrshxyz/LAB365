require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("../../models/user");
const saltRounds = process.env.SALTROUNDS;
//const saltRounds = 10;
async function createUser (req, res) {


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
  
      /*     if (!user.name || !user.password) {
        return res.status(406).json({ message: "Invalid Fields" });
      } */
  
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
  };

  module.exports = createUser;