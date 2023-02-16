const {favorite} = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id, name, gender, image } = req.body;
    const fav = await favorite.create({ id, name, gender, image });
    res.json(fav);
  } catch (error) {
    res.status(404).send({error: error.mesagge})
  }
};

module.exports = postFav;
