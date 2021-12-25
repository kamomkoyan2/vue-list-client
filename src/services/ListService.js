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

  async getListById(id) {
    console.log(id);
    return await axios.get(`${url}list/${id}`);
  },

  async deleteListById(id) {
    console.log(id);
    return await axios.delete(`${url}list/${id}`);
  },

  async editListById(id) {
    return await axios.patch(`${url}list/${id}`);
  },
};
