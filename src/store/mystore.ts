import { ref, reactive } from "vue";

const showCart = ref<boolean>(false);
const itemCart = reactive({ items: [{ text: "hehe" }] });
const CartStore = () => {
  const toggleCart = () => {
    showCart.value = !showCart.value;
  };
  const addItem = () => {
    itemCart.items.push({ text: "hoho" });
  };
  return { toggleCart, addItem, showCart, itemCart };
};

export { CartStore };
