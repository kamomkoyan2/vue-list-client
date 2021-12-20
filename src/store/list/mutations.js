const getDefaultState = () => {
  return {
    userId: "",
    list: {},
  };
};

export default {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_LIST: (state, list) => {
    state.list = list;
  },
  RESET: (state) => {
    Object.assign(state, getDefaultState());
  },
};
