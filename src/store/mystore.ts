/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 *
 */

/* eslint-disable */
import { ref, reactive } from "vue";

export const TOGGLECART = "";

export interface Item {
  text: string;
}
export interface Items {
  realItems: Array<Item>;
  items: Array<Item>;
  isEmpty: boolean;
}

//State
const showCart = ref<boolean>(false);
const itemCart = reactive<Items>({ realItems: [], items: [], isEmpty: false });

//Action
const CartStore = () => {
  const toggleCart = () => {
    showCart.value = !showCart.value;
  };
  const addItem = () => {};
  const addItems = (items: Array<Item>) => {};
  const sortItems = (query: any) => {};
  const searchItems = (query: any) => {};
  const getItems = () => {};
  return { toggleCart, addItem, showCart, itemCart };
};

export { CartStore };
