const { Pokemon, Type } = require("../../db");
const { searchTypes } = require("./types");
const axios = require("axios");

// Obtiene la cantidad de Pokemones
// const countPokemons = async () => {
//   const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
//   const { count } = response.data;
//   return count;
// };

// Obtiene la cantidad de Pokemones
const countPokemons = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=300");
  const  count  = response.data.results.length;
  console.log(count)
  return count;
};

// Crea un Pokemon de la API
const createPokemonApi = (data) => {
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other.dream_world.front_default
      ? data.sprites.other.dream_world.front_default
      : data.sprites.front_default,
    life: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
    height: data.height,
    weight: data.weight,
    types: searchTypes(data.types),
    created: false,
  };
};

// Crea un Pokemon de la DB
const createPokemonDb = async ({
  name,
  image,
  life,
  attack,
  defense,
  speed,
  height,
  weight,
  types,
}) => {
  // Verificar si ya existe un Pokémon con el mismo nombre
  const existingPokemon = await Pokemon.findOne({ where: { name } });

  if (existingPokemon) {
    throw new Error(`Ya existe un Pokémon con el nombre ${name}`);
  }

  const newPokemon = await Pokemon.create({
    name,
    image,
    life,
    attack,
    defense,
    speed,
    height,
    weight,
  });

  await newPokemon.addTypes(types);

  return newPokemon;
};

// Encuentra a todos los pokemones creados para personalizacion
const findAllPokemons = async () => {
  const allPokemons = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const promises = allPokemons.map(async (pokemon) => {
    const count = await countPokemons();
    const modifiedTypes = pokemon.Types.map((type) => type.name); // Obtengo el array con solo los nombres

    const modifiedPokemon = {
      ...pokemon.dataValues,
      id: pokemon.id + count, // Cambia su propiedad ID para que no se repita con los de la API, y simulo continuidad.
      types: modifiedTypes, // Creo propiedad con un array de solo los nombres.
    };

    delete modifiedPokemon.Types; // Elimino la propiedad Type que contiene el arreglo de objetos.

    return modifiedPokemon;
  });
  
  const idModified = await Promise.all(promises);
  return idModified;
};

// Encuentra pokemon por ID
const findById = async (id) => {
  const lastIdApi = await countPokemons();
  const pokemon = await Pokemon.findByPk(id - lastIdApi, {
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const modifiedTypes = pokemon.dataValues.Types.map((type) => type.name);
  const modifiedPokemon = {
    ...pokemon.dataValues,
    id: pokemon.id + lastIdApi,
    types: modifiedTypes,
  };
  delete modifiedPokemon.Types;

  return modifiedPokemon;
};

// Modifico los pokemones obtenidos de mi DB para que queden igual a la API
const modifiedPokemonsDb = async (pokemon) => {
  const count = await countPokemons()
  const modifiedTypes = pokemon.dataValues.Types.map((type) => type.name);
  const modifiedPokemon = {
    ...pokemon.dataValues,
    id: pokemon.id + count,
    types: modifiedTypes,
  };
  delete modifiedPokemon.Types;
  
  return modifiedPokemon;
}

// Encuentro todos los personajes de la API y DB
const getAllPokemons = async (results) => {
  const promises = results.map(async (el) => {
    const response = await axios.get(el.url);
    const { data } = response;
    return createPokemonApi(data);
  });

  const allPokemonsDataBase = await findAllPokemons();

  const allPokemonsApi = await Promise.all(promises);

  const allPokemons = [...allPokemonsApi, ...allPokemonsDataBase];

  return allPokemons;
};

const searchPokemonByName = async (name, url) => {
  const dbPokemons = await Pokemon.findAll({
    where: { name },
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  try {
    const apiPokemons = await axios.get(url + name);
    const response = apiPokemons.data;
    const api = createPokemonApi(response);

    return [...dbPokemons, api];
  } catch (error) {
    return [...dbPokemons];
  }
};


module.exports = {
  createPokemonDb,
  findAllPokemons,
  countPokemons,
  createPokemonApi,
  findById,
  getAllPokemons,
  searchPokemonByName,
  modifiedPokemonsDb
};
