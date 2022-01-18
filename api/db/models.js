const db = require("../db/dbConfig.js");

const find = () => {
  return db("provider-search").select("*");
};

const findProvider = async (product, state) => {
  let allData = await db("provider-search as ps")
    .select("*")
    .join("product as pr", "ps.product_id", "pr.id")
    .join("state as s", "ps.state_id", "s.id")
    .join("providers as p", "p.id", "ps.provider_id")
    .where({ "s.abbreviation": state, "pr.name": product });

  return allData;
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
  findProvider,
};
