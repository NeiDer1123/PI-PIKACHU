const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require("axios");
const {searchTypes} = require('./getAllPok')

async function getPokByName(req, res) {
  try {
    const { name } = req.query;
    const searchName = name.toLowerCase()
    const response = await axios.get(URL + searchName);
    const { data } = response;
    const pokemonApi = {
      id: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default ? data.sprites.other.dream_world.front_default : data.sprites.front_default,
      life: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      height: data.height,
      weight: data.weight,
      types: searchTypes(data.types),
    };
    res.status(200).json(pokemonApi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getPokByName;

// const URL = 'http://localhost:3001/pokemons'

// async function getPokByName(req, res) {
//   try {
//     const { name } = req.query
//     const searchName = name.toLowerCase()
//     const response = await axios.get(URL)

//     const pokFilterName = response.data.filter((pika)=>{
//         return pika.name === searchName
//     })

//     if(!pokFilterName.length){
//         throw new Error(`No hay ningun pokemon llamado ${searchName}`)
//     }

//     res.status(200).json(pokFilterName);
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// }