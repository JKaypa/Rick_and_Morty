const axios = require("axios");

const getCharDetail = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      let chars = {
        id: data.id,
        name: data.name,
        image: data.image,
        status: data.status,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(chars));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-tye": "text/plain" });
      res.end(err.message);
    });
};

module.exports = getCharDetail;
