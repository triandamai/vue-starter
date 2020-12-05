/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */

import { defineComponent, ref } from "vue";
import { CartStore } from "../../store/mystore";
// components
import Empty from "./EmptyCart";
import Bottom from "./BottomCart";
import Items from "../cart/HasItem";
import Item from "../items/ItemCart";
export default defineComponent({
  setup(props, context) {
    return {
      ...CartStore()
    };
  },
  render() {
    return (
      <>
        <div
          v-show={this.showCart}
          class="overlay"
          role="button"
          onClick={this.toggleCart}
        ></div>
        <div v-show={this.showCart} class="drawer drawer-cart open">
          <div class="flex flex-col w-full h-full">
            {/* head cart */}
            <div class="w-full my-3 flex justify-center relative px-3 py-3 px border-b border-gray-200">
              <button
                class="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-2 left-3 transition duration-300 focus:outline-none hover:text-gray-900"
                aria-label="close"
                onClick={this.toggleCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width="35px"
                  height="30px"
                  class="text-gray-500 mt-3"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </button>
              <h2 class="font-md text-lg px mb-3">Keranjang Belanja </h2>
            </div>
            {/*  */}
            {/* <Empty /> */}
            <Items />

            <Bottom />
          </div>
        </div>
      </>
    );
  }
});
