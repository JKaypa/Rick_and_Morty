const { character } = require("../DB_connection");

const getAllChars = async () => {
  try {
    const allChars = await character.findAll();
    return allChars;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getAllChars;
