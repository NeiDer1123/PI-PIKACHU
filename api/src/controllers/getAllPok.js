const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12";
const axios = require("axios");
const { findAll, createPokemonApi } = require("./helpers/pokemons");

async function getAllPok(req, res) {
  try {
    const response = await axios.get(URL);

    const { results } = response.data;

    const promises = results.map(async (el) => {
      const response = await axios.get(el.url);
      const { data } = response;
      return createPokemonApi(data);
    });

    const allPokemonsDataBase = await findAll();

    const allPokemonsApi = await Promise.all(promises);

    const allPokemons = [...allPokemonsApi, ...allPokemonsDataBase];

    res.status(200).json(allPokemons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getAllPok };
