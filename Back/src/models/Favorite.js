const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("favorite", {
    key: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender:{
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {timestamps: false});
};
