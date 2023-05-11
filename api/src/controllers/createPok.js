const { Pokemon } = require("../db");

const createPok = async (pokemon) => {
  const newPokemon = await Pokemon.create(pokemon);
  return newPokemon;
};

module.exports = createPok;
