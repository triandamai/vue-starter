/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * @todo karena vue versi 3 ini sudah ada composition api "mungkin" kita tidak perlus vuex lagi
 * */

import { createStore } from "vuex";
import auth from "./auth.module";
export default createStore({
  modules: { auth }
});
