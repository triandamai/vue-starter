/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */

import { defineComponent, onMounted, ref } from "vue";

import NavBar from "../components/navigation/NavBar";
import Container from "../components/basecomponents/Container";
import Cart from "../components/cart/Cart";
import Drawer from "../components/navigation/Drawer";
import Footer from "../components/basecomponents/Footer";
import Banner from "../components/basecomponents/Banner";
import { fetchItem } from "@/store/actions";

export default defineComponent({
  setup(props, context) {
    onMounted(() => {
      fetchItem({});
    });
    return {};
  },
  render() {
    return (
      <>
        <main class="min-h-full relative">
          <NavBar />
          <Container />
          <Drawer />
          <Cart />
          <Banner />
          <Footer />
        </main>
      </>
    );
  }
});
