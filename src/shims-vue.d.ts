/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * @supported mimeType
 * @instance svg,png,scss,css,jpg etc
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

declare module '*.css'
declare module '*.png'
declare module '*.scss'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.ico'