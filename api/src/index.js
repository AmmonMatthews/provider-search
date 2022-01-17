const express = require("express");
const { graphqlHTTP } = require("express-graphql"); //To set up your GraphQL server
const cors = require("cors");
const app = express();
const schema = require("./types");
const resolvers = require("./resolvers");

app.use(cors());

app.use(express.json());

app.use("/graphql", (req, res, next) => {
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
    context: {
      req,
    },
  })(req, res, next);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
