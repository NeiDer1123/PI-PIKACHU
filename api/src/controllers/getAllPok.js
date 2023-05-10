const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=3";
const axios = require("axios");

async function getAllPok(req, res) {
  try {
    const response = await axios.get(URL)
    const { results } = response.data;

    const promises = results.map(async(el)=>{
        const response = await axios.get(el.url)
        const { data } = response
        return {
            id: data.id,
            name: data.name,
            image: data.sprites.other.dream_world.front_default ? data.sprites.other.dream_world.front_default : data.sprites.front_default,
            life: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            height: data.height,
            weight: data.weight
        }
    })

    const allpokemones = await Promise.all(promises);

    res.status(200).json(allpokemones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getAllPok;
