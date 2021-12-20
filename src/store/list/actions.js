export default {
  createList: ({ commit }, { token, list }) => {
    commit("SET_TOKEN", token);
    commit("SET_LIST", list);
  },
};
