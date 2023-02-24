const express = require("express");
const cors = require("cors");
const getAll = require("./routers/getAllCharRouter");
const getChar = require("./routers/getCharRouter");
const getDetail = require("./routers/getDetailRouter");
const gFav = require("./routers/getFavRouter");
const pFav = require("./routers/postFavRouter");
const dFav = require("./routers/delFavRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/rickandmorty/allCharacters", getAll);
app.use("/rickandmorty/character", getChar);
app.use("/rickandmorty/detail", getDetail);
app.use("/rickandmorty/fav", gFav);
app.use("/rickandmorty/fav", pFav);
app.use("/rickandmorty/fav", dFav);

module.exports = app;
