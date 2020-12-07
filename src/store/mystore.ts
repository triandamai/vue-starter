/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 *
 */

/* eslint-disable */
import { ref, reactive } from "vue";
import { ItemsCart } from "./contstant";

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
      total: 1000
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
      total: 1000
    }
  ],
  items: [],
  isEmpty: false,
  totalPay: 2000
});

//Action
const CartStore = () => {
  const toggleCart = () => {
    showCart.value = !showCart.value;
  };
  const addQty = (i: number) => {
    itemCart.itemscart[i].quantity++;
    itemCart.itemscart[i].total =
      itemCart.itemscart[i].total + itemCart.itemscart[i].item.price;
    itemCart.totalPay += itemCart.itemscart[i].item.price;
  };
  const minQty = (i: number) => {
    if (itemCart.itemscart[i].quantity <= 1) {
      itemCart.totalPay -= itemCart.itemscart[i].total;
      itemCart.itemscart.splice(i, 1);
    } else {
      itemCart.itemscart[i].quantity--;
      itemCart.itemscart[i].total =
        itemCart.itemscart[i].total - itemCart.itemscart[i].item.price;
      itemCart.totalPay -= itemCart.itemscart[i].item.price;
    }
  };
  return { toggleCart, addQty, minQty, showCart, itemCart };
};
const DrawerStore = () => {
  const toggleDrawer = () => {
    showDrawer.value = !showDrawer.value;
  };
  return { showDrawer, toggleDrawer };
};

export { CartStore, DrawerStore };
