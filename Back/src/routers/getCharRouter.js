const express = require("express");
const character = require("../controllers/getChar");

const getChar = express.Router();

getChar.get("/:id", character);

module.exports = getChar;
