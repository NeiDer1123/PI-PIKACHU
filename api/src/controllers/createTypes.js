const { default: axios } = require("axios");
const { Type } = require("../db");
const URL = "http://localhost:3001/types"

const arrayTypes = async ()=> {
    console.log('hola')
    const response = await axios.get(URL)
    const { data } = response
    return data
}

const createTypes = async () => {
    const types = await arrayTypes()
  const newTypes = await Type.bulkCreate(types);
  return newTypes;
};

module.exports = createTypes;
