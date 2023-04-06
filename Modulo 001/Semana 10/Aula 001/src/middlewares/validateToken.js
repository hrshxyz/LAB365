const jwt = require("jsonwebtoken");

function validateToken(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token || token === "Bearer") {
      return res.status(403).json("Token inválido");
    }

    const tokenjwt = token.slice(7);

    jwt.verify(tokenjwt, "ea124657db48b5ad97ea76cdbbc702", (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ error: "Token expired" });
        } else if (err.name === "JsonWebTokenError") {
          return res.status(401).json({ error: "Invalid token" });
        } else {
          return res.status(500).json({ error: "Internal server error" });
        }
      } else {
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = validateToken;
