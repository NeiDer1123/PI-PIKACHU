const { createPokemonDb } = require("./helpers/pokemons");

async function createPok(req, res) {
  try {
    const { name, image, life, attack, defense, speed, height, weight, types } =
      req.body;
    const newPokemon = await createPokemonDb({
      name,
      image,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      types // 
    });
    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = createPok;
