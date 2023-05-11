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
router.post("/types", createTypes);

router.get('/allpokemons', findAllPok)

router.post("/pokemons", createPok );

module.exports = router;
