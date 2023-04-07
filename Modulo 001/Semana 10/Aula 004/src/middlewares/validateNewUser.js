const yup = require("yup");

const validation = yup.object().shape({
  name: yup.string("Nome deve ser String").required("Nome é obrigatório"),
  password: yup
    .string("Senha deve ser String")
    .required("Senha é obrigatória")
    .min(8, "A senha deve ter no mínimo oito caracteres"),
  cpf: yup.string("Nome deve ser String").nullable(),
});

function validateNewUser(req, res, next) {
  console.log(req.body);
  try {
    validation.validateSync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = validateNewUser;
