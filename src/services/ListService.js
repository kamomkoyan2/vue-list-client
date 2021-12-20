import axios from "axios";

const url = "http://localhost:3000/api/v1/";

export default {
  createList(credentials) {
    return axios
      .post(url + "list", credentials)
      .then((response) => console.log(response.data));
  },
};
