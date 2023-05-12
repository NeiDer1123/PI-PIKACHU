const { Pokemon, Type } = require("../../db");
const axios = require("axios");

// Crea un Pokemon
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

// Obtiene la cantidad de Pokemones
const countPokemons = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const { count } = response.data;
  return count;
};

// Encuentra a todos los pokemones creados
// Luego cambia su propiedad ID para que no se repita con los de la API
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
      id: pokemon.id + count,
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
};
