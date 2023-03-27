const Sequelize = require("sequelize");

const User = Sequelize.define("user", {
  id_task: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey:true
  },
  item: {
      type: Sequelize.STRING,
      allowNull: false
  },
  situation: {
      type: Sequelize.BOOLEAN,
      allowNull: false
  },
});