const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=5";
const axios = require("axios");
const { searchTypes } = require("./helpers/types");
const { findAll } = require("./helpers/pokemons");

async function getAllPok(req, res) {
  try {
    const response = await axios.get(URL);
    const { results } = response.data;

    const promises = results.map(async (el) => {
      const response = await axios.get(el.url);
      const { data } = response;
      return {
        id: data.id,
        name: data.name,
        image: data.sprites.other.dream_world.front_default
          ? data.sprites.other.dream_world.front_default
          : data.sprites.front_default,
        life: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        types: searchTypes(data.types),
        // type: data.types[0].type.name
      };
    });

    const allPokemonsDataBase = await findAll();

    const allPokemonsApi = await Promise.all(promises);

    const allPokemons = [...allPokemonsApi, ...allPokemonsDataBase];

    res.status(200).json(allPokemons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getAllPok, searchTypes };
