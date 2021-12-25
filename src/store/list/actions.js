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
      .getListById(id)
      .then((response) => response.data)
      .catch((error) => {
        console.log("error", error);
      });
    commit("GET_LIST", list);
  },

  deleteListById: async ({ commit }, id) => {
    const list = await listService
      .deleteListById(id)
      .then((response) => {
        response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    commit("DELETE_LIST", list);
  },

  editListById: async ({ commit }, id) => {
    const list = await listService
      .editListById(id)
      .then((response) => {
        response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    commit("EDIT_LIST", list);
  },
};
