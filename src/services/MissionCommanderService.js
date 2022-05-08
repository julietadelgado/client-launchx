import http from "../http-common";

class MissionCommanderService {
  getAll() {
    return http.get("/mission-commanders");
  }
  get(id) {
    return http.get(`/mission-commanders/${id}`);
  }
  create(data) {
    return http.post("/mission-commanders", data);
  }
  update(id, data) {
    return http.put(`/mission-commanders/${id}`, data);
  }
  delete(id) {
    return http.delete(`/mission-commanders/${id}`);
  }
}

export default new MissionCommanderService();
