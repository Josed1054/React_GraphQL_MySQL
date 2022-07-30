import { ApolloServer } from "apollo-server";
import { typeDefs } from "./utils/GraphQL/types.js";
import { resolvers } from "./utils/GraphQL/resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
