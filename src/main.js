import { createApp } from "vue";
import App from "./App.vue";
import NProgress from "nprogress";
import VeeValidatePlugin from "./plugin/validator";
import router from "./router";
import store from "./store";
import "../node_modules/nprogress/nprogress.css";
import lazyPlugin from "vue3-lazy";
import "./main.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Paginate from "vuejs-paginate";
import VueRs from "@appbaseio/reactivesearch-vue";
import {
  faUserSecret,
  faUserTie,
  faAt,
  faUser,
  faSignOutAlt,
  faUserCircle,
  faPlus,
  faIdBadge,
  faQuestionCircle,
  faEdit,
  faTrashAlt,
  faCog,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUserSecret,
  faUserTie,
  faAt,
  faUser,
  faSignOutAlt,
  faUserCircle,
  faPlus,
  faIdBadge,
  faQuestionCircle,
  faEdit,
  faTrashAlt,
  faCog,
  faEllipsisH
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("paginate", Paginate);
app.use(VueRs);

app.use(lazyPlugin, {
  loading: "loading.png",
  error: "error.png",
});

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

app.use(VeeValidatePlugin);

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

app.use(store);
app.use(router);
app.mount("#app");
