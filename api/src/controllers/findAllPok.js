const { Pokemon } = require("../db");
const axios = require("axios");

const totalPokemons = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const { count } = response.data;
  return count;
};

const findAllPok = async () => {
  const allPokemons = await Pokemon.findAll();
  const promises = allPokemons.map(async (pokemon) => {
    const count = await totalPokemons();
    console.log(count);
    return {
      ...pokemon.dataValues,
      id: pokemon.id + count,
    };
  });
  const idModified = Promise.all(promises);
  return idModified;
};

module.exports = findAllPok;
