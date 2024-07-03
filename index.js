import { ApolloServer, gql } from "apollo-server";
import sessions from "./data/sessions.json" assert { type: "json" };
import { SessionsAPI } from "./datasources/sessions.js";

const typeDefs = gql`
  type Query {
    sessions(
      id: ID!
      title: String!
      description: String
      startsAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID): Session
  }
  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
  }
`;

const dataSources = () => ({
  sessionsAPI: new SessionsAPI(),
});

const resolvers = {
  Query: {
    sessions: (parent, args, { dataSources }, info) =>
      dataSources.sessionsAPI.getSessions(),
    sessionById: (parent, { id }, { dataSources }, info) =>
      dataSources.sessionsAPI.getSessionById(id),
  },
};

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 graphlQL running at ${url}`);
});
