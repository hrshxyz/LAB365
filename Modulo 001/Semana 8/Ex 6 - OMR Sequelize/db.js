const Sequelize = require('sequelize');

const sequelize = new Sequelize("Trindade", "postgres", "12345", {
    host: "192.168.15.106",
    port: "5432",
    dialect: "postgres"
});

module.exports = sequelize;

