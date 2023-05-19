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

      if (!pokemonDb) {
        return res.status(404).json({ error: "El Pokémon no existe en la base de datos" });
      }

      return res.status(200).json(pokemonDb);
    } else {
      const response = await axios.get(URL + idPokemon);

      if (response.status !== 200) {
        return res.status(404).json({ error: "El Pokémon no se encontró en la API" });
      }

      const { data } = response;
      const pokemonApi = createPokemonApi(data);

      return res.status(200).json(pokemonApi);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = getPokById;

