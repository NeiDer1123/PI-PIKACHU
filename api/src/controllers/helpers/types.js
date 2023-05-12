const { default: axios } = require("axios");
const { Type } = require("../../db");
const URL = "http://localhost:3001/types";

// Obtengo un array con todos los Tipos.
const arrayTypes = async () => {
  const response = await axios.get(URL);
  const { data } = response;
  return data;
};

// Creo todos los tipos del array.
const createAllTypes = async () => {
  const types = await arrayTypes();
  const newTypes = await Type.bulkCreate(types);
  return newTypes;
};

// Obtengo un arreglo de todos los tipos de un personaje
function searchTypes(types) {
  let type = [];
  for (let i = 0; i < types.length; i++) {
    type.push(types[i].type.name);
  }
  console.log(type);
  return type;
}

module.exports = {
  createAllTypes,
  searchTypes,
};
