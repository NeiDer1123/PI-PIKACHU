// const URL = "https://pokeapi.co/api/v2/pokemon/";
// const axios = require("axios");

// async function getPokByName(req, res) {
//     try {
//         const { name } = req.query;
//         const response = await axios.get(URL + name);
//         const { data } = response;
//         const pokemon = {
//           id: data.id,
//           name: data.name,
//           height: data.height,
//           weight: data.weight
//         };
//         res.status(200).json(pokemon);
//       } catch (error) {
//         res.status(500).json({ error: error.message });
//       }
// }

// module.exports = getPokByName;