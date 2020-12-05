/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */

import { defineComponent, ref } from "vue";
import { DrawerStore } from "../../store/mystore";

export default defineComponent({
  setup() {
    return { ...DrawerStore() };
  },
  render() {
    return (
      <>
        <div
          v-show={this.showDrawer}
          onClick={this.toggleDrawer}
          class="overlay overlay-menu"
          role="button"
        ></div>
        <div v-show={this.showDrawer} class="drawer drawer-menu open">
          <div class="flex flex-col w-full h-full">
            {/* header */}
            <div class="w-full h-20 bg-gray-100 flex justify-start items-center relative px-3 flex-shrink-0">
              <a class="flex" href="/">
                <span class="sr-only">Medsy</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  height="31"
                  viewBox="0 0 144.392 31"
                >
                  <defs>
                    <linearGradient
                      id="medsy-menu-logo"
                      x2="1"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#4664ff"></stop>
                      <stop offset="1" stop-color="#ff466c"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    data-name="Group 5718"
                    transform="translate(-577.32 -688.465)"
                  >
                    <path
                      data-name="Union 1"
                      d="M-4006.355,2357.2h5.849c.28,2.394,2.773,3.96,5.988,3.96,3.234,0,5.445-1.547,5.445-3.678,0-1.887-1.385-2.934-4.883-3.719l-3.777-.823c-5.344-1.143-7.978-3.856-7.978-8.1,0-5.344,4.621-8.881,11.093-8.881,6.749,0,10.991,3.474,11.09,8.721h-5.688c-.2-2.451-2.348-3.939-5.385-3.939-2.992,0-5,1.426-5,3.577,0,1.788,1.408,2.793,4.744,3.556l3.516.742c5.805,1.246,8.339,3.739,8.339,8.159,0,5.626-4.562,9.183-11.755,9.183C-4001.731,2365.965-4006.172,2362.65-4006.355,2357.2Zm50.094,5.265a3.209,3.209,0,0,1,3.237-3.234,3.221,3.221,0,0,1,3.236,3.234,3.234,3.234,0,0,1-3.236,3.236A3.221,3.221,0,0,1-3956.261,2362.467Zm-15.59,3v-10.831l-10.089-18.163h6.61l6.49,12.377h.142l6.511-12.377h6.511l-10.109,18.163v10.831Zm-62.21,0v-28.994h11.07c8.7,0,13.824,5.181,13.824,14.385s-5.123,14.609-13.824,14.609Zm6.066-5.023h4.281c5.426,0,8.36-3.3,8.36-9.565,0-6.067-3.013-9.4-8.36-9.4H-4028Zm-29.659,5.023v-28.994h19.209v5h-13.139v6.992h12.4v4.662h-12.4v7.314h13.139v5.023Zm-10.226,0v-19.571h-.161l-7.878,19.289h-3.815l-7.878-19.289h-.161v19.571h-5.406v-28.994h7.034l8.24,20.555h.158l8.24-20.555h7.034v28.994Z"
                      transform="translate(4671 -1647)"
                      stroke="rgba(0,0,0,0)"
                      stroke-width="1"
                      fill="url(#medsy-menu-logo)"
                    ></path>
                  </g>
                </svg>
              </a>
              <div class="flex items-center justify-end ml-auto mr-5 pl-3 pr-5 text-gray-700 flex-shrink-0 lg:hidden">
                <span class="font-semibold text-base  ml-3">
                  +1 855-766-5885
                </span>
              </div>
              <button
                onClick={this.toggleDrawer}
                class="w-5 h-30 flex items-center justify-center text-gray-500 absolute right-4 focus:outline-none"
                aria-label="close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M6.572,4.87a1.2,1.2,0,0,0-1.7,1.7l6.947,6.947L4.87,20.465a1.2,1.2,0,1,0,1.7,1.7l6.946-6.946,6.946,6.946a1.2,1.2,0,0,0,1.7-1.7l-6.946-6.946,6.947-6.947a1.2,1.2,0,0,0-1.7-1.7l-6.946,6.947Z"
                    transform="translate(-4.518 -4.518)"
                  ></path>
                </svg>
              </button>
            </div>
            {/* menu */}
            <div class="ml-3 mt-3 os-host os-host-foreign menu-scrollbar flex-grow os-theme-thin os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition">
              <div class="os-resize-observer-host observed">
                <div
                  class="os-resize-observer"
                  style="left: 0px; right: auto;"
                ></div>
              </div>
              <div
                class="os-size-auto-observer observed"
                style="height: calc(100% + 1px); float: left;"
              >
                <div class="os-resize-observer"></div>
              </div>
              <div
                class="os-content-glue"
                style="margin: 0px; width: 400px; height: 592px;"
              ></div>
              <div class="os-padding">
                <div class="os-viewport os-viewport-native-scrollbars-invisible">
                  <div
                    class="os-content"
                    style="padding: 0px; height: 100%; width: 100%;"
                  >
                    <div class="flex flex-col py-60px pb-40px lg:pb-60px">
                      <a
                        class="menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900 font-semibold active"
                        href="/"
                      >
                        Medsy Modern
                      </a>
                      <a
                        class="menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900"
                        href="https://medsy-minimal.vercel.app/"
                      >
                        Medsy Minimal
                      </a>
                      <a
                        class="menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900"
                        href="https://medsy-classic.vercel.app/"
                      >
                        Medsy Classic
                      </a>
                      <a
                        class="menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900"
                        href="/faq"
                      >
                        FAQ
                      </a>
                      <a
                        class="menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900"
                        href="/terms"
                      >
                        Terms &amp; Conditions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable">
                <div class="os-scrollbar-track os-scrollbar-track-off">
                  <div
                    class="os-scrollbar-handle"
                    style="width: 100%; transform: translate(0px, 0px);"
                  ></div>
                </div>
              </div>
              <div class="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable">
                <div class="os-scrollbar-track os-scrollbar-track-off">
                  <div
                    class="os-scrollbar-handle"
                    style="height: 100%; transform: translate(0px, 0px);"
                  ></div>
                </div>
              </div>
              <div class="os-scrollbar-corner"></div>
            </div>
            {/* footer */}
            <div class="flex items-center justify-start border-t border-gray-300 bg-gray-100 h-12 px-3 flex-shrink-0 lg:hidden">
              <a href="/" class="social facebook" target="_blank">
                <span class="sr-only">facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="15px"
                  viewBox="0 0 15 15"
                >
                  <path
                    data-name="Path 1079"
                    d="M77.227,64H64.773a.773.773,0,0,0-.773.773V77.227a.773.773,0,0,0,.773.773H71V72.458H69.327V70.417H71V68.907a2.66,2.66,0,0,1,2.869-2.793c.773,0,1.6.058,1.8.084v1.889H74.38c-.879,0-1.046.416-1.046,1.028v1.3h2.093l-.273,2.042H73.333V78h3.894A.773.773,0,0,0,78,77.227V64.773A.773.773,0,0,0,77.227,64Z"
                    transform="translate(-63.5 -63.5)"
                    fill="currentColor"
                    stroke="rgba(0,0,0,0)"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></path>
                </svg>
              </a>
              <a href="/" class="social twitter" target="_blank">
                <span class="sr-only">twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21px"
                  height="16px"
                  viewBox="0 0 20.64 15.339"
                >
                  <path
                    data-name="Path 1080"
                    d="M37.3,65.659a7.136,7.136,0,0,1-2.027.558,3.542,3.542,0,0,0,1.553-1.954,7.014,7.014,0,0,1-2.242.857,3.529,3.529,0,0,0-6.107,2.414,3.456,3.456,0,0,0,.091.806A10,10,0,0,1,21.3,64.645a3.537,3.537,0,0,0,1.1,4.718,3.448,3.448,0,0,1-1.6-.441v.044a3.533,3.533,0,0,0,2.833,3.464,3.553,3.553,0,0,1-.93.124,3.33,3.33,0,0,1-.664-.066,3.535,3.535,0,0,0,3.3,2.454,7.077,7.077,0,0,1-4.386,1.513A7.153,7.153,0,0,1,20.1,76.4,9.866,9.866,0,0,0,25.5,78,9.983,9.983,0,0,0,35.555,67.945c0-.153,0-.306-.011-.456A7.185,7.185,0,0,0,37.3,65.659Z"
                    transform="translate(-18.034 -63.161)"
                    fill="currentColor"
                    stroke="rgba(0,0,0,0)"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  ></path>
                </svg>
              </a>
              <a href="/" class="social youtube" target="_blank">
                <span class="sr-only">youtube</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19px"
                  height="14px"
                  viewBox="0 0 18.664 14"
                >
                  <path
                    data-name="logo-youtube (1)"
                    d="M18.538,67.091a2.834,2.834,0,0,0-2.7-2.96C13.82,64.036,11.76,64,9.655,64H9c-2.1,0-4.163.036-6.183.131A2.84,2.84,0,0,0,.122,67.1c-.091,1.3-.13,2.6-.128,3.893s.038,2.6.124,3.9a2.844,2.844,0,0,0,2.694,2.971c2.122.1,4.3.142,6.511.139s4.387-.039,6.511-.139a2.844,2.844,0,0,0,2.7-2.971c.087-1.3.128-2.6.124-3.9S18.625,68.392,18.538,67.091Zm-11,7.477V67.4l5.286,3.58Z"
                    transform="translate(0.006 -64)"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="/" class="social github" target="_blank">
                <span class="sr-only">github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 14 14"
                >
                  <path
                    d="M39,32a7.092,7.092,0,0,0-7,7.178,7.164,7.164,0,0,0,4.787,6.809.549.549,0,0,0,.119.012.339.339,0,0,0,.359-.356c0-.172-.006-.622-.009-1.222a3.2,3.2,0,0,1-.706.084A1.626,1.626,0,0,1,34.9,43.459a1.9,1.9,0,0,0-.778-1.05c-.609-.428,0-.441.044-.441h0a1.5,1.5,0,0,1,1.072.744,1.374,1.374,0,0,0,1.237.784,1.969,1.969,0,0,0,.8-.187,1.551,1.551,0,0,1,.444-.959c-1.553-.181-3.187-.8-3.187-3.547a2.809,2.809,0,0,1,.719-1.925,2.642,2.642,0,0,1,.069-1.9.583.583,0,0,1,.156-.016,3.328,3.328,0,0,1,1.769.753,6.507,6.507,0,0,1,3.506,0,3.328,3.328,0,0,1,1.769-.753.583.583,0,0,1,.156.016,2.642,2.642,0,0,1,.069,1.9,2.821,2.821,0,0,1,.719,1.925c0,2.756-1.638,3.362-3.2,3.541a1.74,1.74,0,0,1,.475,1.328c0,.959-.009,1.734-.009,1.969a.337.337,0,0,0,.356.359.6.6,0,0,0,.125-.012A7.2,7.2,0,0,0,39,32Z"
                    transform="translate(-32 -32)"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="/" class="social instagram" target="_blank">
                <span class="sr-only">instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 14 14"
                >
                  <path
                    data-name="Path 1083"
                    d="M41.917,33.167a2.926,2.926,0,0,1,2.917,2.917v5.833a2.926,2.926,0,0,1-2.917,2.917H36.083a2.926,2.926,0,0,1-2.917-2.917V36.083a2.926,2.926,0,0,1,2.917-2.917h5.833m0-1.167H36.083A4.1,4.1,0,0,0,32,36.083v5.833A4.1,4.1,0,0,0,36.083,46h5.833A4.1,4.1,0,0,0,46,41.917V36.083A4.1,4.1,0,0,0,41.917,32Z"
                    transform="translate(-32 -32)"
                    fill="currentColor"
                  ></path>
                  <path
                    data-name="Path 1084"
                    d="M350.2,108.42a.873.873,0,1,1,.619-.256A.875.875,0,0,1,350.2,108.42Z"
                    transform="translate(-339.413 -104.337)"
                    fill="currentColor"
                  ></path>
                  <path
                    data-name="Path 1085"
                    d="M147.5,145.167a2.333,2.333,0,1,1-2.333,2.333,2.333,2.333,0,0,1,2.333-2.333m0-1.167a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,147.5,144Z"
                    transform="translate(-140.5 -140.5)"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="/" class="social linkedin" target="_blank">
                <span class="sr-only">linkedin</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 14 14"
                >
                  <path
                    d="M44.88,32H33.2A1.142,1.142,0,0,0,32,33.09V44.8A1.232,1.232,0,0,0,33.2,46H44.877A1.169,1.169,0,0,0,46,44.8V33.09A1.073,1.073,0,0,0,44.88,32ZM36.34,43.67H34.334V37.434H36.34Zm-.933-7.184h-.014a1.09,1.09,0,1,1,.014,0ZM43.67,43.67H41.664V40.26c0-.817-.292-1.375-1.017-1.375a1.1,1.1,0,0,0-1.028.74,1.351,1.351,0,0,0-.069.493V43.67H37.543V37.434h2.006V38.3a2.031,2.031,0,0,1,1.809-1.014c1.317,0,2.312.868,2.312,2.739Z"
                    transform="translate(-32 -32)"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
});
