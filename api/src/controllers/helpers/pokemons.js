const { Pokemon, Type } = require("../../db");
const { searchTypes } = require("./types");
const axios = require("axios");

// Crea un Pokemon de la API //
const createPokemonApi = (data)=> {
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
  };
}

// Crea un Pokemon de la DB //
const create = async ({
  name,
  image,
  life,
  attack,
  defense,
  speed,
  height,
  weight,
  types, //
}) => {
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

  newPokemon.addTypes(types);

  return newPokemon;
};

// Obtiene la cantidad de Pokemones //
const countPokemons = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const { count } = response.data;
  return count;
};

// Encuentra a todos los pokemones creados para personalizacion // 
const findAll = async () => {
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

module.exports = {
  create,
  findAll,
  countPokemons,
  createPokemonApi
};
