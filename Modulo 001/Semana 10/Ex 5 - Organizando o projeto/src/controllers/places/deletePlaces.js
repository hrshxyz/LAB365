const Place = require("../../models/place");

async function deletePlaces(req, res) {
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
}

module.exports = deletePlaces;
