import axios from "axios";
const url = "http://localhost:3000/api/v1/";
export default {
  login(credentials) {
    return axios
      .post(url + "login/", credentials)
      .then((response) => response.data);
  },
  signUp(credentials) {
    return axios
      .post(url + "register/", credentials)
      .then((response) => console.log("data", response.data));
  },
  getSecretContent() {
    return axios.get(url + "secret-route/").then((response) => response.data);
  },
};
