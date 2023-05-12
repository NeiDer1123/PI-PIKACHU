const URL = "https://pokeapi.co/api/v2/type";
const axios = require("axios");

async function getTypesPok(req, res) {
  try {
    let typesPokemon = [];
    const response = await axios.get(URL);
    const { data } = response;

    data.results.map((type) => {
      typesPokemon.push({ name: type.name });
    });

    res.status(200).json(typesPokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getTypesPok;
