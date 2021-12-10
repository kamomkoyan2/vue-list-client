import Axios from "axios";

export default {
  // eslint-disable-next-line no-unused-vars
  login: ({ commit, dispatch }, { token, user }) => {
    commit("SET_TOKEN", token);
    commit("SET_USER", user);
    // set auth header
    Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  logout: ({ commit }) => {
    commit("RESET", "");
  },
};
