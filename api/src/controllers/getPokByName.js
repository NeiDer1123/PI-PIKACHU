const URL = "http://localhost:3001/pokemons";
const axios = require("axios");

async function getPokByName(req, res) {
  try {
    const { name } = req.query
    const searchName = name.toLowerCase()
    const response = await axios.get(URL)

    const pokFilterName = response.data.filter((pika)=>{
        return pika.name.startsWith(searchName)
    })

    console.log(pokFilterName)

    res.status(200).json(pokFilterName);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

module.exports = getPokByName;
