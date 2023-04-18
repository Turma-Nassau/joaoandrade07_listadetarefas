const DB_FILE = "sb.sqlite";
const { Sequelize } = require("sequelize");

const db = new Sequelize({
    dialect: "sqlite",
    storage: DB_FILE,
});

module.exports = db;