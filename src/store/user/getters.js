export default {
  isLoggedIn: (state) => {
    return state.token;
  },
  getUser: (state) => {
    return state.user;
  },
  token: (state) => (localStorage.token ? localStorage.token : state.token),
};
