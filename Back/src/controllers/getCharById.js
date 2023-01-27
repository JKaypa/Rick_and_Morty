const axios = require("axios");

const getCharById = (res, id) => {
    console.log(res);
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      let chars = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(chars));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-type": "text/plain" });
      res.end(err.message);
    });
};

module.exports = getCharById;
