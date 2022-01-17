const { mergeResolvers } = require("@graphql-tools/merge");

const providerResolver = require("./providerResolver");

const resolvers = [providerResolver];

module.exports = mergeResolvers(resolvers);
