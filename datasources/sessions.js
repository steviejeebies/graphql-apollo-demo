import { DataSource } from "apollo-datasource";
import sessions from "./data/sessions.json" assert { type: "json" };
import { find } from "lodash-es";

export class SessionsAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions() {
    return sessions;
  }

  getSessionById(id) {
    return find(sessions, { id: parseInt(id) });
  }
}
