import { ApolloServer } from "apollo-server";
import * as dotenv from "dotenv";
import { typeDefs } from "./utils/GraphQL/types.js";
import { resolvers } from "./utils/GraphQL/resolvers.js";

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
