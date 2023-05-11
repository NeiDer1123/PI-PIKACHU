const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokById = require("../controllers/getPokById");
const { getAllPok } = require("../controllers/getAllPok");
const getPokByName = require("../controllers/getPokByName");
const getTypesPok = require("../controllers/getTypesPok");
const createTypes = require("../controllers/createTypes");
const createPok = require("../controllers/createPok");
const findAllPok = require("../controllers/findAllPok");

const router = Router();

// Rutas para interactuar con la API
router.get("/pokemons", getAllPok);

router.get("/pokemons/name", getPokByName);

router.get("/pokemons/:idPokemon", getPokById);

router.get("/types", getTypesPok);

// Rutas para interactuar con la DB
router.post("/types", async (req, res) => {
  try {
    const newType = await createTypes();

    res.status(201).json(newType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/allpokemons', async (req, res) => {
    try {
      const allPokemons = await findAllPok();
        
      res.status(201).json(allPokemons);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  })

router.post("/pokemons", async (req, res) => {
  try {
    const { name, image, life, attack, defense, speed, height, weight } =
      req.body;
    const newPokemon = await createPok({
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
});

module.exports = router;
