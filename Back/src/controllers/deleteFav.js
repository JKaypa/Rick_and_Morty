const fav = require('../utils/data')

const del = (req, res) => {
  try{
    const { id } = req.params;
    const index = fav.findIndex((fav) => fav.id == id);
    if (index >= 0) {
      fav.splice(index, 1);
      return res.send("Character deleted successfuly");
    }
    throw Error("Character not found")
  } catch (err) {
    res.status(404).send(err.message)
  }
  
};

module.exports = del;

