const { create } = require("./helpers/pokemons");

async function createPok(req, res) {
  try {
    const { name, image, life, attack, defense, speed, height, weight } =
      req.body;
    const newPokemon = await create({
      name,
      image,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
    });
    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = createPok;
