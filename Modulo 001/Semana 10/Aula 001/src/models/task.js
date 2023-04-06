const connection = require("../database");
const Sequelize = require("sequelize");
const User = require("./user");

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
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  user_id: {
    type: Sequelize.STRING,
  }
});

Task.belongsTo(User, { foreignKey: "user_id" });

module.exports = Task;
