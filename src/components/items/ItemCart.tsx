/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */

import { defineComponent, ref } from "vue";
import { ItemCart } from "../../store/mystore";

export default defineComponent({
  setup(props) {
    console.log(props);
    const data = ref();
    return { data };
  },
  render() {
    return (
      <>
        <div class="w-full h-auto flex justify-start items-center bg-white px-3 py-6 border-b border-gray-200 relative last:border-b-0">
          <div class="flex w-1/4 h-full rounded overflow-hidden bg-gray-200 mr-5 flex-shrink-0">
            <img
              src="https://s3.amazonaws.com/redqteam.com/medsy/products/periobiotic_hlla7p.jpg"
              alt="PerioBiotic Toothpaste"
              class="my-3"
            />
          </div>
          <div class="flex flex-col w-full px-5">
            <span class="text-md text-gray-900">PerioBiotic Toothpaste</span>
            <span class="text-13px text-gray-500 mt-5px mb-10px">
              Unit Price &nbsp;$3
            </span>
            <div class="mt-3 flex items-center justify-between">
              <div class="group flex items-center justify-between flex-shrink-0 rounded overflow-hidden bg-gray-900 shadow-floatingUp h-35px ">
                <button class="px-3 py-2 flex items-center justify-center outline-none  duration-250 ease-in-out h-full w-1/2 text-white bg-gray-900 transition duration-300 hover:bg-gray-3a focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    height="12px"
                    viewBox="0 0 11.344 12"
                  >
                    <g transform="translate(-13.989)">
                      <g
                        data-name="Group 5372"
                        transform="translate(15.399 2.327)"
                      >
                        <g data-name="Group 5371">
                          <path
                            data-name="Path 17142"
                            d="M81.683,99.28l-.016,8.526a.166.166,0,0,1-.164.164h-6.2a.166.166,0,0,1-.164-.165l-.016-8.525-.984,0,.016,8.524a1.149,1.149,0,0,0,1.148,1.148h6.2a1.149,1.149,0,0,0,1.148-1.147l.016-8.525Z"
                            transform="translate(-74.142 -99.28)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                      <g
                        data-name="Group 5374"
                        transform="translate(13.989 1.836)"
                      >
                        <g data-name="Group 5373">
                          <path
                            data-name="Path 17143"
                            d="M24.841,78.339H14.481a.492.492,0,0,0,0,.984H24.841a.492.492,0,1,0,0-.984Z"
                            transform="translate(-13.989 -78.339)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                      <g data-name="Group 5376" transform="translate(17.514)">
                        <g data-name="Group 5375">
                          <path
                            data-name="Path 17144"
                            d="M167.846,0h-2.656a.821.821,0,0,0-.82.82V2.328h.984V.984h2.328V2.328h.984V.82A.821.821,0,0,0,167.846,0Z"
                            transform="translate(-164.371)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                      <g
                        data-name="Group 5378"
                        transform="translate(18.005 4.393)"
                      >
                        <g data-name="Group 5377">
                          <path
                            data-name="Path 17145"
                            d="M185.847,187.454a.492.492,0,0,0-.492.492v3.967a.492.492,0,1,0,.984,0v-3.967A.492.492,0,0,0,185.847,187.454Z"
                            transform="translate(-185.355 -187.454)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                      <g
                        data-name="Group 5380"
                        transform="translate(20.333 4.393)"
                      >
                        <g data-name="Group 5379">
                          <path
                            data-name="Path 17146"
                            d="M285.169,187.454a.492.492,0,0,0-.492.492v3.967a.492.492,0,1,0,.984,0v-3.967A.492.492,0,0,0,285.169,187.454Z"
                            transform="translate(-284.677 -187.454)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
                <span class="px-4 py-2 font-semibold text-13px text-white flex items-center justify-center h-full w-40px transition-colors duration-250 ease-in-out cursor-default">
                  1
                </span>
                <button class="px-3 py-2 flex items-center justify-center outline-none  duration-250 ease-in-out h-full w-1/2 text-white bg-gray-900 transition duration-300 hover:bg-gray-3a focus:outline-none">
                  <svg
                    data-name="plus (2)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    height="12px"
                    viewBox="0 0 12 12"
                  >
                    <g data-name="Group 5367">
                      <path
                        data-name="Path 17138"
                        d="M6.749,5.251V0h-1.5V5.251H0v1.5H5.251V12h1.5V6.749H12v-1.5Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
              <span class="font-semibold text-16px text-gray-900 flex-shrink-0">
                $3.00
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
});
