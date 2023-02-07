const express = require('express')
const del = require('../controllers/deleteFav')

const dFav = express.Router();

dFav.delete("/:id", del);

module.exports = dFav;