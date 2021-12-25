<template>
  <section class="relative pt-16 bg-blueGray-50">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <div
          class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78"
        >
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500"
          >
            <div
              style="position: absolute; top: 0; right: 0; padding: 10px"
              class="flex items-center justify-center p-12"
            >
              <div class="relative inline-block text-left dropdown">
                <span class="rounded-md shadow-sm"
                  ><button
                    class="inline-flex justify-center outline-none w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="headlessui-menu-items-117"
                  >
                    <span><font-awesome-icon icon="ellipsis-h" /></span></button
                ></span>
                <div
                  class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
                >
                  <div
                    class="absolute right-0 w-12 mt-2 origin-top-right bg-indigo divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    aria-labelledby="headlessui-menu-button-1"
                    id="headlessui-menu-items-117"
                    role="menu"
                  >
                    <div class="m-0 p-0">
                      <button
                        tabindex="0"
                        class="text-gray-700 hover:bg-neutral-200 hover:text-white flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                      >
                        <font-awesome-icon icon="edit" />
                      </button>
                      <button
                        type="submit"
                        @click.prevent="deleteListById"
                        tabindex="1"
                        class="text-gray-700 flex hover:bg-neutral-200 hover:text-white justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                      >
                        <font-awesome-icon icon="trash-alt" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              alt="..."
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
              class="w-full align-middle rounded-t-lg"
            />
            <blockquote class="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="absolute left-0 w-full block h-95-px -top-94-px"
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  class="text-pink-500 fill-current"
                ></polygon>
              </svg>
              <h4 class="text-xl font-bold text-white">{{ list.title }}</h4>
              <p class="text-md font-light mt-2 text-white"></p>
            </blockquote>
          </div>
        </div>

        <div class="w-full md:w-6/12 px-4">
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <i class="fas fa-sitemap"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">CSS Components</h6>
                  <p class="mb-4 text-blueGray-500">
                    Notus JS comes with a huge number of Fully Coded CSS
                    components.
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <i class="fas fa-drafting-compass"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">
                    JavaScript Components
                  </h6>
                  <p class="mb-4 text-blueGray-500">
                    We also feature many dynamic components for React, NextJS,
                    Vue and Angular.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col min-w-0 mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <i class="fas fa-newspaper"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Pages</h6>
                  <p class="mb-4 text-blueGray-500">
                    This extension also comes with 3 sample pages. They are
                    fully coded so you can start working instantly.
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <i class="fas fa-file-alt"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Documentation</h6>
                  <p class="mb-4 text-blueGray-500">
                    Built by developers for developers. You will love how easy
                    is to to work with Notus JS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapGetters({
      list: "list/getList",
    }),
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },

    async deleteListById() {
      try {
        this.$swal({
          title: "Delete this list ?",
          text: "Are you sure? You won't be able to revert this!",
          icon: "warning",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Yes, Delete it!",
        }).then((result) => {
          if (result.value) {
            this.$swal.fire(
              "Deleted!",
              "Your list has been deleted.",
              "success"
            );
            this.$store.dispatch("list/deleteListById", this.$route.params.id);
            this.$router.push("/");
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },

  async mounted() {
    await this.$store.dispatch("list/getList");
    await this.$store.dispatch("list/getListById", this.$route.params.id);
  },
};
</script>

<style>
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>
