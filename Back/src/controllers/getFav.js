const fav = require('../utils/data')

const getFav = (req, res) => {
  res.send(fav);
}

module.exports = getFav;