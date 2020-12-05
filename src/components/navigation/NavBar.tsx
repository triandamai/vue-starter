/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */

import { defineComponent } from "vue";
import { CartStore, DrawerStore } from "../../store/mystore";

export default defineComponent({
  setup(props, { emit }) {
    return { ...CartStore(), ...DrawerStore() };
  },
  render() {
    return (
      <>
        <header class="flex items-center shadow-sm text-gray-700 body-font fixed bg-white w-full h-90 z-20 py-5 ">
          {/* buger */}
          <button
            onClick={this.toggleDrawer}
            aria-label="menu"
            class="flex flex-col items-center justify-center w-auto flex-shrink-0 h-full outline-none focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="30px"
              height="30px"
              class="ml-2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {/* logo */}
          <a class="hidden ml-3 mx-auto lg:mr-10 lg:flex" href="/">
            <span class="sr-only">Medsy</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110px"
              height="31"
              viewBox="0 0 144.392 31"
            >
              <defs>
                <linearGradient
                  id="medsy-header-logo"
                  x2="1"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#4664ff"></stop>
                  <stop offset="1" stop-color="#ff466c"></stop>
                </linearGradient>
              </defs>
              <g data-name="Group 5718" transform="translate(-577.32 -688.465)">
                <path
                  data-name="Union 1"
                  d="M-4006.355,2357.2h5.849c.28,2.394,2.773,3.96,5.988,3.96,3.234,0,5.445-1.547,5.445-3.678,0-1.887-1.385-2.934-4.883-3.719l-3.777-.823c-5.344-1.143-7.978-3.856-7.978-8.1,0-5.344,4.621-8.881,11.093-8.881,6.749,0,10.991,3.474,11.09,8.721h-5.688c-.2-2.451-2.348-3.939-5.385-3.939-2.992,0-5,1.426-5,3.577,0,1.788,1.408,2.793,4.744,3.556l3.516.742c5.805,1.246,8.339,3.739,8.339,8.159,0,5.626-4.562,9.183-11.755,9.183C-4001.731,2365.965-4006.172,2362.65-4006.355,2357.2Zm50.094,5.265a3.209,3.209,0,0,1,3.237-3.234,3.221,3.221,0,0,1,3.236,3.234,3.234,3.234,0,0,1-3.236,3.236A3.221,3.221,0,0,1-3956.261,2362.467Zm-15.59,3v-10.831l-10.089-18.163h6.61l6.49,12.377h.142l6.511-12.377h6.511l-10.109,18.163v10.831Zm-62.21,0v-28.994h11.07c8.7,0,13.824,5.181,13.824,14.385s-5.123,14.609-13.824,14.609Zm6.066-5.023h4.281c5.426,0,8.36-3.3,8.36-9.565,0-6.067-3.013-9.4-8.36-9.4H-4028Zm-29.659,5.023v-28.994h19.209v5h-13.139v6.992h12.4v4.662h-12.4v7.314h13.139v5.023Zm-10.226,0v-19.571h-.161l-7.878,19.289h-3.815l-7.878-19.289h-.161v19.571h-5.406v-28.994h7.034l8.24,20.555h.158l8.24-20.555h7.034v28.994Z"
                  transform="translate(4671 -1647)"
                  stroke="rgba(0,0,0,0)"
                  stroke-width="1"
                  fill="url(#medsy-header-logo)"
                ></path>
              </g>
            </svg>
          </a>
          {/* search */}
          <div class="w-full ml-4 mr-4 flex justify-center">
            <form class="flex items-center justify-center w-full rounded relative overflow-hidden">
              <span class="absolute top-0 left-0 flex items-center justify-center h-full w-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="24px"
                  height="24px"
                  class="ml-2 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="search"
                placeholder="Cari medikal kamu"
                class="w-full h-12 pl-12 px-4 text-gray-900 placeholder-gray-500 bg-gray-100 border-2 border-transparent rounded outline-none transition duration-200 hover:border-gray-400 focus:border-gray-400 focus:placeholder-gray-900"
              />
            </form>
          </div>
          {/* number */}
          <div class="hidden items-center text-gray-900 mr-10 flex-shrink-0 lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.182"
              height="20.851"
              viewBox="0 0 20.182 20.851"
            >
              <g
                data-name="contact icon"
                transform="translate(-305.636 -1009.888)"
              >
                <g
                  data-name="Group 5517"
                  transform="translate(306.036 1013.959)"
                >
                  <path
                    data-name="Path 17350"
                    d="M318.825,1107.377a12.789,12.789,0,0,1-12.789-12.789,3.584,3.584,0,0,1,5.564-3,.359.359,0,0,1,.156.243l.748,4.718a.359.359,0,0,1-.074.28,3.592,3.592,0,0,1-1.142.943,8.206,8.206,0,0,0,4.352,4.353,3.592,3.592,0,0,1,.942-1.142.36.36,0,0,1,.28-.074l4.718.748a.359.359,0,0,1,.243.156,3.547,3.547,0,0,1,.592,1.973A3.6,3.6,0,0,1,318.825,1107.377Zm-9.2-15.661a2.876,2.876,0,0,0-2.873,2.873,12.084,12.084,0,0,0,12.071,12.071,2.867,2.867,0,0,0,2.482-4.318l-4.395-.7a2.856,2.856,0,0,0-.755,1.073.359.359,0,0,1-.459.2,8.914,8.914,0,0,1-5.206-5.206.359.359,0,0,1,.2-.459,2.855,2.855,0,0,0,1.073-.755l-.7-4.395a2.826,2.826,0,0,0-1.445-.391Z"
                    transform="translate(-306.036 -1090.997)"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.8"
                  ></path>
                </g>
                <g
                  data-name="Group 5521"
                  transform="translate(315.367 1010.339)"
                >
                  <g data-name="Group 5518" transform="translate(0.107 6.633)">
                    <path
                      data-name="Path 17351"
                      d="M519.471,1161.367l-.693-.19a1.858,1.858,0,0,0-2.285-2.284l-.19-.693a2.576,2.576,0,0,1,3.168,3.166Z"
                      transform="translate(-516.303 -1158.109)"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.8"
                    ></path>
                  </g>
                  <g data-name="Group 5519" transform="translate(0 3.245)">
                    <path
                      data-name="Path 17352"
                      d="M520.487,1089.388l-.693-.19a4.621,4.621,0,0,0-5.683-5.678l-.19-.693a5.339,5.339,0,0,1,6.566,6.561Z"
                      transform="translate(-513.921 -1082.637)"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.8"
                    ></path>
                  </g>
                  <g data-name="Group 5520" transform="translate(0.398 0)">
                    <path
                      data-name="Path 17353"
                      d="M532.121,1019.936l-.693-.19a6.872,6.872,0,0,0-8.451-8.444l-.19-.693a7.59,7.59,0,0,1,9.334,9.327Z"
                      transform="translate(-522.787 -1010.339)"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.8"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <span class="font-semibold text-base text-14px ml-3">
              +1 855-766-5885
            </span>
          </div>
          {/* cart */}
          <button
            class="mr-5 flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
            onClick={this.toggleCart}
            aria-label="cart-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="30px"
              height="30px"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span
              style="width:18px; height:18px; font-size:10px; top:-10px;right:-10px"
              class=" flex items-center justify-center bg-gray-900 text-white absolute rounded-full"
            >
              1
            </span>
          </button>
        </header>
      </>
    );
  }
});
