const {favorite} = require("../DB_connection");

const del = async (req, res) => {
  try {
    const { id } = req.params;
    await favorite.destroy({ where: { id } });
    res.send("Character deleted successfuly");
  } catch (err) {
    res.status(404).send(err.message);
  }
};

module.exports = del;
