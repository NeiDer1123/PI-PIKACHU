const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokById = require('../controllers/getPokById')

const router = Router();

// Configurar los routers
router.get('/pokemons', (req, res)=>{
    res.send("Ruta para todos los personajes")
})

router.get('/pokemons/:idPokemon', getPokById)

router.get('/pokemons/?nombre=pokemon', (req, res)=>{
    res.send("Ruta personajes por nombre") 
})

router.post('/pokemons', (req, res)=>{
    res.send("Agregar los pokemones") 
})

router.get('/types', (req, res)=>{
    res.send("Ruta para los tipos de personaje")
})



module.exports = router;
