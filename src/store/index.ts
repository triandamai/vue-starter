/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */

import { createStore } from "vuex";
import auth from "./auth.module";
export default createStore({
  modules: { auth }
});
