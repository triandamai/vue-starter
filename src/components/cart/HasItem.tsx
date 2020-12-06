/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */

import { defineComponent, ref } from "vue";
import Item from "../items/ItemCart";
import { CartStore } from "../../store/mystore";
export default defineComponent({
  setup() {
    return {
      ...CartStore()
    };
  },
  render() {
    return (
      <>
        <div class=" flex-grow overflow-y-auto">
          {this.itemCart.itemscart.map((item, index) => {
            return <Item data-item={item} />;
          })}
        </div>
      </>
    );
  }
});
