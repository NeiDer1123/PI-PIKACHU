const { default: axios } = require("axios");
const { Type } = require("../db");
const URL = "http://localhost:3001/types";

const arrayTypes = async () => {
  console.log("hola");
  const response = await axios.get(URL);
  const { data } = response;
  return data;
};

const createAllTypes = async () => {
  const types = await arrayTypes();
  const newTypes = await Type.bulkCreate(types);
  return newTypes;
};

async function createTypes(req, res) {
  try {
    const newType = await createAllTypes();

    res.status(201).json(newType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = createTypes;
