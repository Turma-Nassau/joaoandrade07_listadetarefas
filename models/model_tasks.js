const { DataTypes } = require("sequelize");
const db = require("../database");
const Collections = require("./model_collections");

const Tasks = db.define("tasks", {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey:true
  },
  item: {
      type: DataTypes.STRING,
      allowNull: false
  },
  situation: {
      type: DataTypes.BOOLEAN,
      allowNull: false
  },
});

Tasks.belongsTo(Collections, {
    constraints: true,
    foreignKey: 'idCollections',
});

Collections.hasMany(Tasks, {
    foreignKey: 'idCollections',
});

(async () => {
    db.sync()
        .then(() => {
            console.log("Tabela tasks criada com sucesso!");
        })
        .catch((error) => {
            console.log("Não foi possível criar a tabela: ", error);
        });
})();

module.exports = Tasks;