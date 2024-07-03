const sessions = require("../data/sessions.json");
const { DataSource } = require("apollo-datasource");
const _ = require("lodash");

class SessionsAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions() {
    return sessions;
  }

  getSessionById(id) {
    const sessions = _.filter(sessions, { id: parseInt(id) });
  }
}

module.exports = SessionsAPI;
