export default {
  SET_TOKEN: (state, token) => {
    state.token = token;
    localStorage.setItem("token", token);
  },
  SET_USER: (state, user) => {
    state.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  },
  LOGOUT: (state) => {
    state.token = null;
    state.user = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};
