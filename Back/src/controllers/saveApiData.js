const axios = require("axios");
const { character } = require("../DB_connection");

const getApiData = async (id = 1, characters = []) => {
  try {
    if (id > 5) return characters;
    let { data } = await axios(
      `https://rickandmortyapi.com/api/character?page=${id}`
    );
    let results = await data.results;

    results.forEach((char) => {
      const elem = {
        id: char.id,
        name: char.name,
        species: char.species,
        status: char.status,
        origin: char.origin.name,
        gender: char.gender,
        image: char.image,
      };
      characters.push(elem);
    });
    return getApiData(id + 1, characters);
  } catch (err) {
    return { error: err.message };
  }
};

const saveApiData = async () => {
  try {
    hundredChars = await getApiData();
    await character.bulkCreate(hundredChars); //bulkCreate nos permite pasarle un array de objetos y los crea en la DB
    return hundredChars;
  } catch (err) {
    return { error: err.message };
  }
};

module.exports = saveApiData;
