const { favorite } = require("../DB_connection");

const getFav = async (_req, res) => {
  try {
    const favs = await favorite.findAll();
    res.json(favs);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = getFav;
