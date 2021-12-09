import Axios from "axios";

export default {
  login: ({ commit }, { token, user }) => {
    commit("SET_TOKEN", token);
    commit("SET_USER", user);
    // set auth header
    Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  logout: ({ commit }) => {
    commit("RESET", "");
  },
};
