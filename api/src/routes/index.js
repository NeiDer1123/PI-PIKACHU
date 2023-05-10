const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokById = require('../controllers/getPokById');
const getAllPok = require('../controllers/getAllPok');
const getPokByName = require('../controllers/getPokByName');
const getTypesPok = require('../controllers/getTypesPok');

const router = Router();

// Configurar los routers
router.get('/pokemons', getAllPok)

router.get('/pokemons/name', getPokByName)

router.get('/pokemons/:idPokemon', getPokById)

router.post('/pokemons', (req, res)=>{

})

router.get('/types', getTypesPok)



module.exports = router;
