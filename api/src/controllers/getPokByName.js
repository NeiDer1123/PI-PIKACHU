const URL = "http://localhost:3001/pokemons";
const axios = require("axios");

async function getPokByName(req, res) {
  try {
    const { name } = req.query;
    const searchName = name.toLowerCase();
    const response = await axios.get(URL);

    if (!name) {
      return res.status(400).json({ error: "El parámetro 'name' es obligatorio" });
    }

    const pokFilterName = response.data.filter((pika) => {
      return pika.name.toLowerCase() === searchName;
    });

    if (!pokFilterName.length) {
      return res.status(404).json({ error: `No hay ningún pokemon llamado ${searchName}` });
    }

    res.status(200).json(pokFilterName);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getPokByName;
