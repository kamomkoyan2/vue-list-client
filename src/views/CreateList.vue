<template>
  <div class="w-full">
    <div class="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
      <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
        <p class="text-3xl font-bold leading-7 text-center">List</p>
        <form action="" method="post">
          <div class="md:flex items-center mt-12">
            <div class="w-full flex flex-col">
              <label class="font-semibold leading-none">title</label>
              <input
                type="text"
                class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
              />
            </div>
          </div>
          <div>
            <div class="w-full flex flex-col mt-8">
              <label class="font-semibold leading-none">Content</label>
              <textarea
                type="text"
                class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
              ></textarea>
            </div>
          </div>
          <div class="flex items-center justify-center w-full">
            <button
              type="submit"
              @click.prevent="createList"
              class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
            >
              Create List
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ListService from "../services/ListService";

export default {
  name: "CreateList",
  data() {
    return {
      title: "",
      content: "",
    };
  },

  methods: {
    async createList() {
      try {
        const credentials = {
          title: this.title,
          content: this.content,
        };
        const response = await ListService.createList(credentials);

        const token = response.token;
        const list = response.list;

        this.$store.dispatch("list/createList", { token, list });
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
