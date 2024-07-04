import { gql } from "apollo-server";

export default gql`
  input SessionInput {
    id: ID
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    favourite: Boolean
    level: String
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
    favourite: Boolean
    speakers: [Speaker]
  }

  type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
    somethingElse: String
  }

  type Query {
    sessions(input: SessionInput): [Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
  }

  type Mutation {
    toggleFavouriteSession(id: ID): Session
  }
`;
