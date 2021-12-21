import axios from "axios";

export default {
  // eslint-disable-next-line no-unused-vars
  login: ({ commit, dispatch }, { token, user }) => {
    console.log(token);
    commit("SET_TOKEN", token);
    commit("SET_USER", user);
    console.log(user);
    // set auth header
    axios.defaults.headers.common["Authorization"] = token;
  },
  logout: ({ commit }) => {
    commit("LOGOUT");
  },
};
