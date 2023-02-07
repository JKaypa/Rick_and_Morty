const express = require("express");
const cors = require('cors')
const app = express();

const allowed = ['http://localhost:3000']

const getChar = require("./routers/getCharRouter");
const getDetail = require("./routers/getDetailRouter");
const gFav = require("./routers/getFavRouter");
const pFav = require("./routers/postFavRouter");
const dFav = require("./routers/delFavRouter");

app.use(cors({origin: allowed}))
app.use(express.json());
app.use("/rickandmorty/character", getChar);
app.use("/rickandmorty/detail", getDetail);
app.use("/rickandmorty/fav", gFav);
app.use("/rickandmorty/fav", pFav);
app.use("/rickandmorty/fav", dFav);

module.exports = app;
