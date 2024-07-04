// When resolving the Speaker type - the speaker type has a key 'sessions' (which we defined in the schema for Speaker type).
// So, we need a way to resolve the 'sessions' key for the Speaker type.

export const Speaker = {
  async sessions(speaker, args, { dataSources }, info) {
    const sessions = await dataSources.sessionsAPI.getSessions();

    const speakerSessions = speaker.sessions;

    return speakerSessions.map((speakerSession) =>
      sessions.find((session) => session.id === speakerSession.id)
    );
  },
  somethingElse: () => "This is an extra value for every speaker!",
};
