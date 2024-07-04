export const Session = {
  async speakers(session, args, { dataSources }, info) {
    const speakers = await dataSources.speakersAPI.getSpeakers();

    const sessionSpeakers = session.speakers;

    return sessionSpeakers.map((sessionSpeaker) =>
      speakers.find((speaker) => speaker.id === sessionSpeaker.id)
    );
  },
};
