import { RESTDataSource } from "apollo-datasource-rest";

export class SpeakersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/speakers";
  }

  async getSpeakers() {
    return await this.get("/");
  }

  async getSpeakersById(id) {
    return await this.get(`/${id}`);
  }
}
