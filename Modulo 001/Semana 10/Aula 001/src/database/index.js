const Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: "5432",
  username: "postgres",
  password: "12345",
  database: "tarefas_database",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  logging: false,
});

module.exports = connection;
