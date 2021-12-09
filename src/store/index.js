import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import actions from "./user/actions";
import mutations from "./user/mutations";
import getters from "./user/getters";

const getDefaultState = () => {
  return {
    token: "",
    user: {},
  };
};

export default createStore({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {},
});
