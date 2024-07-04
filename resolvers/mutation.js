export const Mutation = {
  toggleFavouriteSession: (parent, { id }, { dataSources }, info) =>
    dataSources.sessionsAPI.toggleFavouriteSession(id),
};
