import { createApp } from "vue";
import App from "./App.vue";
import VeeValidatePlugin from "./plugin/validator";
import router from "./router";
import store from "./store";
import "./main.css";
import Axios from "axios";

const app = createApp(App);
// set auth header
Axios.defaults.headers.common["Authorization"] = `Bearer ${store.state.token}`;

app.use(VeeValidatePlugin);

app.use(store);
app.use(router);
app.mount("#app");
