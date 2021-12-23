<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs cursor-pointer font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(1)"
            v-bind:class="{
              'text-white-600 bg-white': openTab !== 1,
              'text-white bg-blue-600': openTab === 1,
            }"
          >
            Profile
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase cursor-pointer px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(2)"
            v-bind:class="{
              'text-white-600 bg-white': openTab !== 2,
              'text-white bg-blue-600': openTab === 2,
            }"
          >
            Settings
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs cursor-pointer font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(3)"
            v-bind:class="{
              'text-white-600 bg-white': openTab !== 3,
              'text-white bg-blue-600': openTab === 3,
            }"
          >
            Reset Password
          </a>
        </li>
      </ul>
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
      >
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <div class="flex justify-center items-center w-full">
                <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                  <h1
                    class="block w-full text-center text-gray-800 text-2xl font-bold mb-6"
                  >
                    Complete Your Profile Setup
                  </h1>
                  <form action="/" method="post">
                    <div class="flex flex-col mb-4">
                      <label
                        class="mb-2 font-bold text-lg text-gray-900"
                        for="first_name"
                        >First Name</label
                      >
                      <input
                        class="border py-2 px-3 text-grey-800"
                        type="text"
                        name="first_name"
                        id="first_name"
                      />
                    </div>
                    <div class="flex flex-col mb-4">
                      <label
                        class="mb-2 font-bold text-lg text-gray-900"
                        for="last_name"
                        >Last Name</label
                      >
                      <input
                        class="border py-2 px-3 text-grey-800"
                        type="text"
                        name="last_name"
                        id="last_name"
                      />
                    </div>
                    <div class="flex flex-col mb-4">
                      <label
                        class="mb-2 font-bold text-lg text-gray-900"
                        for="email"
                        >Email</label
                      >
                      <input
                        class="border py-2 px-3 text-grey-800"
                        type="email"
                        name="email"
                        id="email"
                      />
                    </div>
                    <div class="flex flex-col mb-4">
                      <label
                        class="mb-2 font-bold text-lg text-gray-900"
                        for="password"
                        >Password</label
                      >
                      <input
                        class="border py-2 px-3 text-grey-800"
                        type="password"
                        name="password"
                        id="password"
                      />
                    </div>
                    <div class="flex flex-col mb-4">
                      <label
                        class="mb-2 font-bold text-lg text-gray-900"
                        for="Date"
                        >Date</label
                      >
                      <input
                        class="border py-2 px-3 text-grey-800"
                        type="date"
                        name="date"
                        id="date"
                      />
                    </div>
                    <div class="flex flex-col mb-4">
                      <label
                        class="mb-2 font-bold text-lg text-gray-900"
                        for="File"
                        >File</label
                      >
                      <input
                        class="border py-2 px-3 text-grey-800"
                        type="file"
                        name="file"
                        id="file"
                      />
                    </div>
                    <div class="flex flex-col mb-4">
                      <label
                        class="mb-2 font-bold text-lg text-gray-900"
                        for="textarea"
                        >textarea</label
                      >
                      <textarea
                        class="border py-2 px-3 text-grey-800"
                        name="textarea"
                        id="textarea"
                      ></textarea>
                    </div>
                    <div class="flex flex-col mb-4">
                      <label
                        class="mb-2 font-bold text-lg text-gray-900"
                        for="Select"
                        >Select</label
                      >
                      <select class="border py-2 px-3 text-grey-800">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <button
                      class="block bg-green-400 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded"
                      type="submit"
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <p>
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </p>
            </div>
            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <div class="container mx-auto">
                <div class="flex justify-center px-6 my-12">
                  <!-- Row -->
                  <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                    <!-- Col -->
                    <!-- Col -->
                    <div
                      class="w-full lg:w-full bg-white p-5 rounded-lg lg:rounded-l-none"
                    >
                      <div class="px-8 mb-4 text-center">
                        <h3 class="pt-4 mb-2 text-2xl">
                          Forgot Your Password?
                        </h3>
                        <p class="mb-4 text-sm text-gray-700">
                          We get it, stuff happens. Just enter your email
                          address below and we'll send you a link to reset your
                          password!
                        </p>
                      </div>
                      <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                        <div class="mb-4">
                          <label
                            class="block mb-2 text-sm font-bold text-gray-700"
                            for="email"
                          >
                            Email
                          </label>
                          <input
                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div class="mb-6 text-center">
                          <button
                            class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                            type="button"
                          >
                            Reset Password
                          </button>
                        </div>
                        <hr class="mb-6 border-t" />
                        <div class="text-center">
                          <a
                            class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                            href="./register.html"
                          >
                            Create an Account!
                          </a>
                        </div>
                        <div class="text-center">
                          <a
                            class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                            href="./index.html"
                          >
                            Already have an account? Login!
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
