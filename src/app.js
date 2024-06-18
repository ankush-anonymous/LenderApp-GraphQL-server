import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { typeDefs } from "./schema.js";
import { resolvers } from "./mutation.js"; // Updated to use import

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ prisma }),
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server running at ${url}`);
});
