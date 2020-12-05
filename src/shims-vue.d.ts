/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.svg' {
  import Vue, {VueConstructor} from 'vue';
  const content: VueConstructor<Vue>;
  export default content;
}
