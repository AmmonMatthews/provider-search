/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("product")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("product").insert([
        { id: 1, name: "auto" },
        { id: 2, name: "fire" },
        { id: 3, name: "flood" },
      ]);
    });
};
