import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api/v1/";
export default {
  async createList(credentials) {
    return await axios
      .post("list", credentials)
      .then((response) => response.data)
      .catch((error) => {
        console.log("error", error);
      });
  },

  async getListAxios() {
    return await axios.get("list");
  },

  async getListById(url) {
    return await axios.get(url);
  },
};
