const { Sequelize } = require("sequelize");
const character = require("./models/Characters");
const favorite = require("./models/Favorite");

require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
  { logging: false }
);

character(sequelize);
favorite(sequelize);

module.exports = {
  ...sequelize.models,
  sequelize,
};
