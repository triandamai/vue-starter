import { defineComponent, ref } from "vue";
import { CartStore } from "../../store/mystore";

export default defineComponent({
  setup() {
    const { showCart, toggleCart } = CartStore();
    return { toggleCart, showCart };
  },
  render() {
    return <></>;
  }
});
