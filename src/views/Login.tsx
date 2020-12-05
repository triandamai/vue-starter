/**
 * Date     05 December 2020
 * Time     21:31
 * Author   Trian Damai
 * */

import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const login = ref("hehe");
    return { login };
  },
  render() {
    return (
      <>
        <div class="px-5 py-5 bg-indigo-700 h-screen items-center xs:container sm:container md:container lg:container xs:flex-wrap sm:flex-wrap md:flex lg:flex">
          {/*  */}
          <div>
            <div>
              <h2 class="text-center text-white font-roboto mt-10 text-3xl">
                Challenges 👍
              </h2>
              <p class="text-center text-white font-roboto mt-5 text-lg">
                We launch contests regulary s you can practice your craft, gain
                exposure and earn great prizes. Explore our open challenges and
                submit your work!
              </p>
            </div>
            <div class="flex text-gray-400 text-xs mt-5 mb-5">
              <p>Our previous metors from:</p>
            </div>
          </div>
          {/*  */}
          <div class="mx-5 my-3 bg-white p-2 rounded-md">
            <div class="mx-3 my-3">
              <form>
                <div>
                  <input placeholder="Username" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
});
