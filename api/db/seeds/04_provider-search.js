/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("provider-search")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("provider-search").insert([
        { id: 1, state_id: 1, product_id: 1, provider_id: 1 },
        { id: 2, state_id: 2, product_id: 1, provider_id: 1 },
        { id: 3, state_id: 2, product_id: 2, provider_id: 1 },
        { id: 4, state_id: 1, product_id: 2, provider_id: 1 },
        { id: 5, state_id: 1, product_id: 1, provider_id: 2 },
        { id: 6, state_id: 1, product_id: 2, provider_id: 3 },
        { id: 7, state_id: 1, product_id: 2, provider_id: 4 },
        { id: 8, state_id: 2, product_id: 2, provider_id: 4 },
        { id: 9, state_id: 2, product_id: 2, provider_id: 5 },
        { id: 10, state_id: 1, product_id: 2, provider_id: 5 },
        { id: 11, state_id: 3, product_id: 2, provider_id: 5 },
        { id: 12, state_id: 3, product_id: 2, provider_id: 6 },
        { id: 13, state_id: 2, product_id: 2, provider_id: 6 },
        { id: 14, state_id: 2, product_id: 1, provider_id: 6 },
        { id: 15, state_id: 1, product_id: 1, provider_id: 6 },
        { id: 16, state_id: 1, product_id: 2, provider_id: 6 },
        { id: 17, state_id: 2, product_id: 3, provider_id: 6 },
        { id: 18, state_id: 1, product_id: 3, provider_id: 6 },
        { id: 19, state_id: 3, product_id: 3, provider_id: 6 },
        { id: 20, state_id: 1, product_id: 2, provider_id: 7 },
        { id: 21, state_id: 1, product_id: 1, provider_id: 7 },
        { id: 22, state_id: 2, product_id: 1, provider_id: 7 },
        { id: 23, state_id: 2, product_id: 2, provider_id: 7 },
        { id: 24, state_id: 3, product_id: 2, provider_id: 7 },
        { id: 25, state_id: 3, product_id: 1, provider_id: 7 },
        { id: 26, state_id: 2, product_id: 3, provider_id: 7 },
        { id: 27, state_id: 1, product_id: 3, provider_id: 7 },
        { id: 28, state_id: 3, product_id: 3, provider_id: 8 },
        { id: 29, state_id: 2, product_id: 3, provider_id: 8 },
        { id: 30, state_id: 3, product_id: 1, provider_id: 9 },
        { id: 31, state_id: 2, product_id: 1, provider_id: 9 },
        { id: 32, state_id: 1, product_id: 1, provider_id: 9 },
        { id: 33, state_id: 1, product_id: 2, provider_id: 9 },
        { id: 34, state_id: 2, product_id: 2, provider_id: 9 },
        { id: 35, state_id: 1, product_id: 1, provider_id: 10 },
        { id: 36, state_id: 2, product_id: 2, provider_id: 10 },
        { id: 37, state_id: 1, product_id: 2, provider_id: 10 },
        { id: 39, state_id: 3, product_id: 1, provider_id: 10 },
        { id: 40, state_id: 1, product_id: 3, provider_id: 10 },
        { id: 41, state_id: 2, product_id: 3, provider_id: 10 },
        { id: 42, state_id: 3, product_id: 3, provider_id: 10 },
        { id: 43, state_id: 3, product_id: 2, provider_id: 11 },
        { id: 44, state_id: 1, product_id: 2, provider_id: 11 },
        { id: 45, state_id: 2, product_id: 2, provider_id: 11 },
      ]);
    });
};
