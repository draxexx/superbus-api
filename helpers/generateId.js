const { randomUUID } = require("crypto");

// generate random id
const generateId = (length) => {
  const generatedUUID = randomUUID().toUpperCase();

  if (length < generatedUUID.length) {
    const id = generatedUUID.substring(0, length);
    return id;
  }
};

module.exports = generateId;
