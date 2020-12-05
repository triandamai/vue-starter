/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */

import { defineComponent, ref } from "vue";
import Item from "../items/ItemCart";
export default defineComponent({
  components: {
    Item
  },
  setup() {
    const data = ref();
    return {
      data
    };
  },
  render() {
    return (
      <>
        <div class=" flex-grow overflow-y-auto">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </>
    );
  }
});
