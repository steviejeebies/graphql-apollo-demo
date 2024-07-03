import { filter } from "lodash-es";

export default {
  Query: {
    sessions: (parent, args, { dataSources }, info) =>
      dataSources.sessionsAPI.getSessions(args),
    sessionById: (parent, { id }, { dataSources }, info) =>
      dataSources.sessionsAPI.getSessionById(id),
    speakers: (parent, args, { dataSources }, info) =>
      dataSources.speakersAPI.getSpeakers(args),
    speakerById: (parent, { id }, { dataSources }, info) =>
      dataSources.speakersAPI.getSpeakersById(id),
  },
  Session: {
    async speakers(session, args, { dataSources }, info) {
      const speakers = await dataSources.speakersAPI.getSpeakers();

      const sessionSpeakers = session.speakers;

      return sessionSpeakers.map((sessionSpeaker) =>
        speakers.find((speaker) => speaker.id === sessionSpeaker.id)
      );
    },
  },
  // When resolving the Speaker type - the speaker type has a key 'sessions' (which we defined in the schema for Speaker type).
  // So, we need a way to resolve the 'sessions' key for the Speaker type.
  Speaker: {
    async sessions(speaker, args, { dataSources }, info) {
      const sessions = await dataSources.sessionsAPI.getSessions();

      const speakerSessions = speaker.sessions;

      return speakerSessions.map((speakerSession) =>
        sessions.find((session) => session.id === speakerSession.id)
      );
    },
    somethingElse: () => "This is an extra value for every speaker!",
  },
};
