const fav = require("../utils/data");

const postFav = (req, res) => {
  const char = req.body;
  fav.push(char);  
    res.json(char);
};

module.exports = postFav;
