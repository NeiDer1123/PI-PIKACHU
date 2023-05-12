const { createAllTypes } = require("./helpers/types");

async function createTypes(req, res) {
  try {
    const newType = await createAllTypes();

    res.status(201).json(newType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = createTypes;
