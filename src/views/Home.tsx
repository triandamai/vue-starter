import { defineComponent, ref } from "vue";
import NavBar from "../components/navigation/NavBar";
import Container from "../components/basecomponents/Container";
import Cart from "../components/cart/Cart";
interface Item {
  title: string;
}

export default defineComponent({
  components: {
    NavBar,
    Container,
    Cart
  },

  setup(props, context) {
    return {};
  },

  render() {
    return (
      <>
        <main class="min-h-screen relative">
          <NavBar />
          <Container />
          <Cart />
        </main>
      </>
    );
  }
});
