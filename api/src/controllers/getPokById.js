const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require("axios");
const {
  countPokemons,
  createPokemonApi,
  findById,
} = require("./helpers/pokemons");

async function getPokById(req, res) {
  try {
    const { idPokemon } = req.params;
    const lastIdApi = await countPokemons();
    const id = parseInt(idPokemon);

    if (id > lastIdApi) {
      const pokemonDb = await findById(id);

      res.status(200).json(pokemonDb);
    } else {
      const response = await axios.get(URL + idPokemon);
      const { data } = response;
      const pokemonApi = createPokemonApi(data);

      res.status(200).json(pokemonApi);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getPokById;
