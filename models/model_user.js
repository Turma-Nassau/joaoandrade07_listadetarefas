const { DataTypes } = require("sequelize");
const db = require("../database");
// const Collections = require("./model_collections");

const User = db.define("user", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
        primaryKey:true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 40]
        },
    },
});

// User.hasMany(Collections);

(async () => {
    db.sync()
        .then(() => {
            console.log("Tabela user criada com sucesso!");
        })
        .catch((error) => {
            console.log("Não foi possível criar a tabela: ", error);
        });
})();

module.exports = User;