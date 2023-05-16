const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12";
const axios = require("axios");
const { getAllPokemons } = require("./helpers/pokemons");

async function getAllPok(req, res) {
  try {
    const response = await axios.get(URL);

    const { results } = response.data;

    const allPokemons = await getAllPokemons(results);

    res.status(200).json(allPokemons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getAllPok };
