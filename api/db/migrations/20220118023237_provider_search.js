/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("provider-search", function (table) {
    table.increments("id").unsigned();
    table
      .integer("state_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("state")
      .onDelete("CASCADE")
      .index();
    table
      .integer("product_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("product")
      .onDelete("CASCADE")
      .index();
    table
      .integer("provider_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("providers")
      .onDelete("CASCADE")
      .index();

    // These are another way to add the foreign keys to the table
    // table.integer("state_id").unsigned().nullable();
    // table.integer("product_id").unsigned().nullable();
    // table.integer("provider_id").unsigned().nullable();
    // table.foreign("state_id").references("id").inTable("state");
    // table.foreign("product_id").references("id").inTable("product");
    // table.foreign("provider_id").references("id").inTable("providers");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("provider-search");
};
