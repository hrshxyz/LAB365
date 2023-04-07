const Place = require("../../models/place");

async function createPlaces(req, res) {
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
}
module.exports = createPlaces;
