const axios = require("axios");

const detail = async (req, res) => {
  try {
    const { id } = req.params;
    let response = await axios(
      `https://rickandmortyapi.com/api/character/${id}`);
    let data = response.data;
    const char = {
      id: data.id,
      name: data.name,
      image: data.image,
      status: data.status,
      gender: data.gender,
      origin: data.origin.name,
      species: data.species,
      location: data.location.name
    };
    res.json(char);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = detail;
