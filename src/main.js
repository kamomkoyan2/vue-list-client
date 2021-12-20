import { createApp } from "vue";
import App from "./App.vue";
import NProgress from "nprogress";
import VeeValidatePlugin from "./plugin/validator";
import router from "./router";
import store from "./store";
import "../node_modules/nprogress/nprogress.css";
import lazyPlugin from "vue3-lazy";
import "./main.css";
import Axios from "axios";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
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
  faQuestionCircle
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(lazyPlugin, {
  loading: "loading.png",
  error: "error.png",
});

// set auth header
Axios.defaults.headers.common["Authorization"] = `Bearer ${store.state.token}`;

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
