const connection = require("../database");
const Sequelize = require("sequelize");

const Place = connection.define("place", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  openinghours: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  latitude: {
    type: Sequelize.DECIMAL,
  },
  longitude: {
    type: Sequelize.DECIMAL,
  },
});

module.exports = Place;
