/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("state")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("state").insert([
        { id: 1, name: "Illinios", abbreviation: "IL" },
        { id: 2, name: "Indiana", abbreviation: "IN" },
        { id: 3, name: "Michigan", abbreviation: "MI" },
      ]);
    });
};
