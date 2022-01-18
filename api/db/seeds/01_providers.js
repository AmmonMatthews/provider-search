/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("providers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("providers").insert([
        { id: 1, name: "Allstate", url: "https://allstate.com" },
        { id: 2, name: "Founders", url: "https://founders.com" },
        { id: 3, name: "Gaurd", url: "https://gaurd.com" },
        { id: 4, name: "Hippo", url: "https://hippo.com" },
        { id: 5, name: "Lemonade", url: "https://lemonade.com" },
        { id: 6, name: "National General", url: "https://nationalgeneral.com" },
        { id: 7, name: "Nationwide", url: "https://nationwide.com" },
        { id: 8, name: "Neptune", url: "https://neptune.com" },
        { id: 9, name: "Progressive", url: "https://progressive.com" },
        { id: 10, name: "Seneca", url: "https://seneca.com" },
        { id: 11, name: "Swyfft", url: "https://swyfft.com" },
        { id: 12, name: "TypTap", url: "https://swyfft.com" },
      ]);
    });
};
