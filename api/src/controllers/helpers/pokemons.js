const { Pokemon } = require("../../db");
const axios = require("axios");

// Crea un Pokemon
const create = async (pokemon) => {
  const newPokemon = await Pokemon.create(pokemon);
  return newPokemon;
};

// Obtiene la cantidad de Pokemones
const countPokemons = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const { count } = response.data;
  return count;
};

// Encuentra a todos los pokemones creados
// Luego cambia su propiedad ID para que no se repita con los de la API
const findAll = async () => {
  const allPokemons = await Pokemon.findAll();
  const promises = allPokemons.map(async (pokemon) => {
    const count = await countPokemons();
    console.log(count);
    return {
      ...pokemon.dataValues,
      id: pokemon.id + count,
    };
  });
  const idModified = Promise.all(promises);
  return idModified;
};

module.exports = {
  create,
  findAll
};
