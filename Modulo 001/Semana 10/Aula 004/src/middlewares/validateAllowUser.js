/* function validateAllowUser(req, res, next) {
  try {
    const uId = req.userId;
    console.log(uId)
    if (uId != '39') {
      return res.status(500).json({ message: "Acesso negado" });
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = validateAllowUser;
 */