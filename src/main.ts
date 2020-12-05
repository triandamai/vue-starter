/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */

import { createApp } from "vue";
import App from "./App";
import router from "./router/index";
import store from "./store/index";
import "./assets/tailwind.css";

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    next({ path: "/login" });
  } else {
    next();
  }
});
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
