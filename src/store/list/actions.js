import listService from "../../services/ListService";

export default {
  createList: ({ commit }, list) => {
    commit("SET_LIST", list);
  },

  getList: async ({ commit }) => {
    const lists = await listService
      .getListAxios()
      .then((response) => response.data)

      .catch((error) => {
        console.log("error", error);
      });
    console.log(lists);
    commit("GET_LISTS", lists);
  },

  getListById: async ({ commit }, id) => {
    const list = await listService
      .getListById(`/list/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.log("error", error);
      });
    commit("GET_LIST_ID", list);
  },
};
