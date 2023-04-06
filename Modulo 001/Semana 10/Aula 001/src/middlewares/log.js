const jwt = require("jsonwebtoken");

function log(req, res, next) {
  /*   console.log('Método',req.method)
  console.log('Método',req.path)
  console.log('Corpo',req.body)
  console.log('Params',req.params) */
  console.log("Passei");
  next();
}

module.exports = log;
