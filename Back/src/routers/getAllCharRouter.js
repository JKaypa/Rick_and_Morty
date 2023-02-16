const express = require("express");
const getAllChars = require("../controllers/getAllChars");

const getAll = express.Router();

getAll.get("/", async (_req, res) => {
  try {
    let allChars = await getAllChars();
    res.json(allChars);
  } catch (error) {
    res.status(404).send({ error: "hubo un error" + error.message });
  }
});

module.exports = getAll;
