const express = require("express");
const postFav = require("../controllers/postFav");

const pFav = express.Router();

pFav.post("/", postFav);

module.exports = pFav;
