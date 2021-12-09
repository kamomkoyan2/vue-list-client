const getDefaultState = () => {
  return {
    token: "",
    user: {},
  };
};

export default {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER: (state, user) => {
    state.user = user;
  },
  RESET: (state) => {
    Object.assign(state, getDefaultState());
  },
};
