import { DataSource } from "apollo-datasource";
import sessions from "../data/sessions.json" assert { type: "json" };
import { find, filter } from "lodash-es";

export class SessionsAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions(args) {
    return filter(sessions, args);
  }

  getSessionById(id) {
    return find(sessions, { id: parseInt(id) });
  }

  getSpeakers(args) {
    return filter(sessions, args);
  }

  getSpeakersById(id) {
    return find(sessions, { id: parseInt(id) });
  }
}
