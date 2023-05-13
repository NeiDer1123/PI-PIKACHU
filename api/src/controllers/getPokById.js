const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require("axios");
const { searchTypes } = require("./getAllPok");
const { countPokemons } = require("./helpers/pokemons");
const { Pokemon } = require("../db");

async function getPokById(req, res) {
  try {
    const { idPokemon } = req.params;
    const lastIdApi = await countPokemons();
    const id = parseInt(idPokemon);

    if (id > lastIdApi) {
      const pokemon = await Pokemon.findByPk(id - lastIdApi);
      const pokemonDb = pokemon.dataValues;

      res.status(200).json(pokemonDb);
    } else {
      const response = await axios.get(URL + idPokemon);
      const { data } = response;
      const pokemonApi = {
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
      };

      res.status(200).json(pokemonApi);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getPokById;
