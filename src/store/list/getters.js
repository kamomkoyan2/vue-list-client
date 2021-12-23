export default {
  getLists: (state) => state.lists,
  getList: (state) => {
    return state.list;
  },

  list: (state) => (localStorage.list ? localStorage.list : state.list),
};
