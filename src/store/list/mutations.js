export default {
  SET_LIST: (state, list) => {
    state.lists = state.lists.unshift(list);
  },
  GET_LISTS: (state, lists) => {
    state.lists = lists;
  },
};
