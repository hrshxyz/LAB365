const Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: "postgres",
  host: "192.168.15.106",
  port: "5432",
  username: "postgres",
  password: "12345",
  database: "tarefas_database",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = connection;
