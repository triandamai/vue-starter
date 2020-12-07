/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */
import { defineComponent, ref } from "vue";
import { CartStore } from "../../store/mystore";

export default defineComponent({
  setup() {
    return { ...CartStore() };
  },
  render() {
    return (
      <>
        <div class="flex flex-col p-3">
          <div class="flex items-center justify-between">
            <span class="font-semibold text-gray-900">
              Subtotal
              <span class="font-normal text-gray-700 text-md">(Diskon 0%)</span>
            </span>
            <span class="font-semibold text-md text-gray-900">
              Rp.
              {this.itemCart.totalPay}
              ,00-
            </span>
          </div>

          <button
            v-show={this.itemCart.itemscart.length !== 0}
            class="flex items-center justify-center flex-shrink-0 font-normal w-auto uppercase rounded outline-none transition duration-250 ease-in-out focus:outline-none text-white bg-gray-900 hover:bg-gray-900 h-11 px-3 big mt-2"
            type="button"
            aria-label="button"
          >
            Bayar Sekarang
          </button>
          <button
            v-show={this.itemCart.itemscart.length === 0}
            class="flex items-center justify-center flex-shrink-0 font-normal w-auto uppercase rounded outline-none transition duration-200 ease-in-out focus:outline-none text-gray-500 bg-gray-300 cursor-not-allowed hover:bg-gray-300 h-11 px-3 big mt-2"
            type="button"
            aria-label="button"
            disabled
          >
            Bayar
          </button>
        </div>
      </>
    );
  }
});
