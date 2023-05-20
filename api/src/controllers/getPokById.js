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

      return res.status(200).json(pokemonDb);
    } else {
      const response = await axios.get(URL + idPokemon);

      const { data } = response;
      const pokemonApi = createPokemonApi(data);

      return res.status(200).json(pokemonApi);
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "No se encontro ningun Pokemon con ese ID" });
  }
}

module.exports = getPokById;

