const {
  find,
  findBy,
  findAllProducts,
  findAllStates,
  findProvider,
} = require("../../db/models");

module.exports = {
  providers: async (_, request) => {
    let result = await find().catch((err) =>
      console.error("providers error ---", err)
    );

    return result;
  },
  providersByProductAndState: async ({ product, state }, request) => {
    let result = await findBy(product, state).catch((err) =>
      console.error("find by err ---", err)
    );

    return result;
  },
  allProducts: async (_, request) => {
    let result = await findAllProducts().catch((err) => {
      console.error("find all products ----", err);
    });

    return result;
  },

  allStates: async (_, request) => {
    let result = await findAllStates().catch((err) => {
      console.error("find all states ----", err);
    });

    return result;
  },

  allProviders: async ({ product, state }, request) => {
    let result = await findProvider(product, state).catch((err) =>
      console.error("find by err ---", err)
    );

    console.log("result ---", result);
    return result;
  },
};
