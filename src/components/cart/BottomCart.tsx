/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const data = ref();
    return { data };
  },
  render() {
    return (
      <>
        <div class="flex flex-col p-3">
          <div class="flex items-center justify-between">
            <span class="font-semibold text-gray-900">
              Subtotal
              <span class="font-normal text-gray-700 text-md">(Incl.VAT)</span>
            </span>
            <span class="font-semibold text-md text-gray-900">
              Rp 0.000,00-
            </span>
          </div>
          <button
            class="flex items-center justify-center flex-shrink-0 font-normal w-auto uppercase rounded outline-none transition duration-200 ease-in-out focus:outline-none text-gray-500 bg-gray-300 cursor-not-allowed hover:bg-gray-300 h-11 px-3 big mt-2"
            type="button"
            aria-label="button"
            disabled
          >
            Konfirmasi
          </button>
        </div>
      </>
    );
  }
});
