const Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: "5432",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "tarefas_database",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  logging: false,
});

module.exports = connection;
