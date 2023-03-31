const connection = require("../database");
const Sequelize = require("sequelize");

const Task = connection.define("task", {
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
  opening hours: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.INTEGER,,
    allowNull: trfalseue,
  },
  longitude: {
    type: Sequelize.INTEGER,,
    allowNull: false,
  },
});

module.exports = Equipamento;
