import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";
import { SessionsAPI } from "./datasources/sessions.js";
import { SpeakersAPI } from "./datasources/speakers.js";

const dataSources = () => ({
  sessionsAPI: new SessionsAPI(),
  speakersAPI: new SpeakersAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 graphlQL running at ${url}`);
});
