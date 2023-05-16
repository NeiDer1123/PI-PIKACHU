const URL = 'http://localhost:3001/pokemons'
const axios = require("axios");

async function getPokByName(req, res) {
  try {
    const { name } = req.query
    const searchName = name.toLowerCase()
    const response = await axios.get(URL)

    const pokFilterName = response.data.filter((pika)=>{
        return pika.name === searchName
    })

    if(!pokFilterName.length){
        throw new Error(`No hay ningun pokemon llamado ${searchName}`)
    }

    res.status(200).json(pokFilterName);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = getPokByName;

