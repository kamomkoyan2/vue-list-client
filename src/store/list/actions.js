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
      console.log(lists)
    commit("GET_LISTS", lists);
  },
};
