/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const data = ref(0);
    return { data };
  },
  render() {
    return (
      <>
        <div class="flex flex-col w-full h-full flex-grow">
          <div class="pt-9 px-3 pb-5 flex-auto md:px-3"></div>
        </div>
      </>
    );
  }
});
