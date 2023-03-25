const Sequelize = require('sequelize');

const database = require('./db.js');

const Lista = database.define('lista', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tarefa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING
    },
});

module.exports = Lista;