const Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: "postgres",
  host: "192.168.15.101",
  port: "5432",
  username: "postgres",
  password: "12345",
  database: "place",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = connection;
