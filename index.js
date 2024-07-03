const { ApolloServer, gql } = require("apollo-server");
const sessions = require("./data/sessions.json");
const SessionsAPI = require("./datasources/sessions");

const typeDefs = gql`
  type Query {
    sessions: [Session]
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
    track: String @deprecated(reason: "Too many tracks")
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
