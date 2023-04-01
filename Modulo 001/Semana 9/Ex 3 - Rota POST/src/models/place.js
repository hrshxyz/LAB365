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
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  longitude: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
});

module.exports = Place;
