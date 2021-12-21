import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../layouts/auth.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound";
import UserSettings from "../views/UserSettings";
import Subscription from "../views/Subscription";
import CreateList from "../views/CreateList";
import Register from "../views/Register";
import Default from "../layouts/default";

const routes = [
  {
    path: "/",
    name: "layoutDefault",
    component: Default,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          auth: true,
          title: "Home",
        },
      },
      {
        path: "subscription",
        name: "Subscription",
        component: Subscription,
        meta: {
          auth: true,
          title: "Subscription",
        },
      },
      {
        path: ":catchAll(.*)",
        name: "Not Found",
        component: NotFound,
      },
      {
        path: "/create-list",
        name: "CreateList",
        component: CreateList,
        meta: {
          auth: true,
          title: "Create List",
        },
      },
      {
        path: "/settings",
        name: "UserSettings",
        component: UserSettings,
        mata: {
          title: "User Settings",
        },
      },
    ],
  },
  {
    path: "/auth",
    name: "layout",
    component: Auth,
    children: [
      {
        path: "register",
        name: "Register",
        component: Register,
        meta: {
          auth: false,
          title: "Register",
        },
      },
      {
        path: "login",
        name: "Login",
        component: Login,
        meta: {
          auth: false,
          title: "Login",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | List App`;

  if (to.meta.auth) {
    if (localStorage.token !== undefined && localStorage.token !== "null") {
      return next();
    } else {
      return next("auth/login");
    }
  }

  next();
});
export default router;
