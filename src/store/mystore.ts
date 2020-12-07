/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 *
 */

/* eslint-disable */
import { ref, reactive } from "vue";
import { Item, ItemsCart } from "./types";

//State
const showCart = ref<boolean>(true);
const showDrawer = ref<boolean>(false);
const itemCart = reactive<ItemsCart>({
  itemscart: [
    {
      item: {
        id: 1,
        title: "Covonia Dry & Ticly Lintus ",
        category: "obat",
        qty: "180ml",
        price: 1000,
        image: ""
      },
      quantity: 1,
      total: 0
    },
    {
      item: {
        id: 1,
        title: "Covonia Dry & Ticly Lintus ",
        category: "obat",
        qty: "180ml",
        price: 1000,
        image: ""
      },
      quantity: 1,
      total: 0
    }
  ],
  items: [],
  isEmpty: false
});

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
const DrawerStore = () => {
  const toggleDrawer = () => {
    showDrawer.value = !showDrawer.value;
  };
  return { showDrawer, toggleDrawer };
};

export { CartStore, DrawerStore };
