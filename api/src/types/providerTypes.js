// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
module.exports = `

  type Provider {
    id: Int
    name: String!
    product: String
    state: String
    abbreviation: String
  }

  type Query {
    allProducts: [Provider!]
    allStates: [Provider!]
    providersByProductAndState(product: String!, state: String!): [Provider!]
    providers: [Provider!]
    allProviders(product: String!, state: String!): [Provider!]
  }
 
`;
