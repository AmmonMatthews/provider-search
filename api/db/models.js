const db = require("../db/dbConfig.js");

const find = () => {
  return db("provider-search").select("*");
};

const findBy = (product, state) => {
  return db("provider-search").where({ product, state }).select("*");
};

const findAllProducts = () => {
  return db("product").select("*");
};

const findAllStates = () => {
  return db("state").select("*");
};

module.exports = {
  find,
  findBy,
  findAllProducts,
  findAllStates,
};
