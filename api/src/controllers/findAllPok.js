const { findAll } = require("./helpers/pokemons");

async function findAllPok(req, res) {
  try {
    const allPokemons = await findAll();

    res.status(201).json(allPokemons);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = findAllPok;
