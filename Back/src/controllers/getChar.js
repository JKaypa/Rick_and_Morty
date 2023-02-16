const axios = require("axios");

const character = async (req, res) => {
  try {
    const { id } = req.params;
    let { data } = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const char = {
      id: data.id,
      name: data.name,
      image: data.image,
      gender: data.gender,
      species: data.species,
    };
    res.json(char);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = character;
