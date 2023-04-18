const { DataTypes } = require("sequelize");
const db = require("../database");
// const Tasks = require("./model_tasks");
// const User = require("./model_user");

const Collections = db.define("collections", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
}, { sequelize, modelName: 'tasks' }); 


// Collections.belongsTo(User);
// Collections.hasMany(Tasks);

(async () => {
    db.sync()
        .then(() => {
            console.log("Tabela collections criada com sucesso!");
        })
        .catch((error) => {
            console.log("Não foi possível criar a tabela: ", error);
        });
})();

module.exports = Collections;