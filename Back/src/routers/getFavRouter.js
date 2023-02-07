const express = require("express");
const getFav = require('../controllers/getFav')

const gFav = express.Router();

gFav.get("/", getFav);

module.exports = gFav;
