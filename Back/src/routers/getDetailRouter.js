const express = require('express')
const detail = require("../controllers/getDetail");

const getDetail = express.Router();

getDetail.get("/:id", detail);

module.exports = getDetail;