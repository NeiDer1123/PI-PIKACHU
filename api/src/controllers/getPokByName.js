const URL = "https://pokeapi.co/api/v2/pokemon/";
const { searchPokemonByName, countPokemons, modifiedPokemonsDb } = require("./helpers/pokemons");

async function getPokByName(req, res) {
  try {
    const { name } = req.query;
    const searchName = name.toLowerCase()

    const response = await searchPokemonByName(searchName, URL)

    if (response.length === 0) {
      throw new Error("No se encontró ningún Pokémon con ese nombre");
    }
    if(response[0].created){
      const pokemonModified = await modifiedPokemonsDb(response[0])
      res.status(200).json([pokemonModified])
    } else {
      res.status(200).json(response)
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getPokByName;
