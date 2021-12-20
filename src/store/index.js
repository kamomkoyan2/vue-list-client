import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";
import user from "./user";
import list from "./list";

export default new Vuex.Store({
  strict: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    list,
    user,
  },
});
