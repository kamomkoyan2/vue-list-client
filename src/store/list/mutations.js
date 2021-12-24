export default {
  SET_LIST: (state, list) => {
    state.lists = state.lists.unshift(list);
  },
  GET_LISTS: (state, lists) => {
    state.lists = lists;
  },
  GET_LIST: (state, list) => {
    state.lists = list;
    localStorage.setItem("list", JSON.stringify(list));
  },

  DELETE_LIST: (state, id) => {
    let index = state.lists.findIndex((list) => list.id === id);
    state.lists.splice(index, 1);
  },
};
