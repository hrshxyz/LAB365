const Place = require("../../models/place");

async function alterPlaces(req, res) {
  try {
    const data = {
      name: req.body.name,
      telefone: req.body.telefone,
      openinghours: req.body.openinghours,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    };

    const idPlace = req.params.id * 1;
    const checkId = await Place.findByPk(idPlace);

    if (!checkId) {
      return res.status(404).json({ message: "ID não existe!" });
    }

    if (!data.name || !data.telefone) {
      return res
        .status(406)
        .json({ message: "Campos Obrigatórios, name e telefone." });
    }

    const nameExist = await Place.findOne({
      where: { name: data.name },
    });

    if (nameExist) {
      if (nameExist.id !== idPlace) {
        return res.status(400).json({ message: "Local já cadastrado." });
      }
    }

    const updatePlaceName = await Place.update(
      { name: data.name },
      { where: { id: idPlace } }
    );

    const updatePlaceTelefone = await Place.update(
      { telefone: data.telefone },
      { where: { id: idPlace } }
    );

    if (data.openinghours) {
      const updatePlaceOpeninghours = await Place.update(
        { openinghours: data.openinghours },
        { where: { id: idPlace } }
      );
    }

    if (data.description) {
      const updatePlacedescription = await Place.update(
        { description: data.description },
        { where: { id: idPlace } }
      );
    }

    if (data.latitude) {
      const updatePlacedlatitude = await Place.update(
        { latitude: data.latitude },
        { where: { id: idPlace } }
      );
    }

    if (data.longitude) {
      const updatePlacedlongitude = await Place.update(
        { longitude: data.longitude },
        { where: { id: idPlace } }
      );
    }

    res.status(204).json(updatePlaceName);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação!" });
  }
}

module.exports = alterPlaces;
