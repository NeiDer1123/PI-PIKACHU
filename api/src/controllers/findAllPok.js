const { Pokemon } = require("../db");
const axios = require("axios");

const countPokemons = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const { count } = response.data;
  return count;
};

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

async function findAllPok(req, res) {
  try {
    const allPokemons = await findAll();

    res.status(201).json(allPokemons);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = findAllPok;
