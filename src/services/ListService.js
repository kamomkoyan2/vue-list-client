import axios from "axios";
const url = "http://localhost:3000/api/v1/";

export default {
  async createList(credentials) {
    return await axios
      .post(url + "list", credentials)
      .then((response) => response.data)
      .catch((error) => {
        console.log("error", error);
      });
  },

  async getListAxios() {
    return await axios.get(url + "list");
  },
};
