const { mergeTypeDefs } = require("@graphql-tools/merge");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const providerTypes = require("./providerTypes");

// this will be the types file

const types = [providerTypes];

const typeDefs = mergeTypeDefs(types);

const schema = makeExecutableSchema({
  typeDefs,
});

module.exports = schema;
