const Place = require("../../models/place");

async function getPlaces(_, res) {
  try {
    const places = await Place.findAll();
    return res.json(places);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
}

module.exports = getPlaces;
