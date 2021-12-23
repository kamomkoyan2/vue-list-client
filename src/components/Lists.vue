<template>
  <div
    class="p-10 grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
    style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr))"
  >
    <div
      v-for="list in lists"
      :key="list"
      class="p-4 grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12"
    >
      <!--Card 1-->
      <div class="rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMypZGy2gePk1YPlIdQG1KcIyDQ8sISXsSHg&usqp=CAU"
          alt="Mountain"
        />
        <div class="px-6 py-4">
          <router-link :to="'/list/' + list.listId">
            <div class="font-bold text-xl mb-2">{{ list.title }}</div>
          </router-link>
          <p class="text-gray-700 text-base">
            {{ list.content }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#photography</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#travel</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#winter</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Lists",

  computed: {
    ...mapGetters({
      lists: "list/getLists",
      list: "list/getList",
      user: "user/getUser",
    }),
  },
  data() {
    return {
      msg: "Welcome to my Vuex Store Getter example",
    };
  },
  async mounted() {
    await this.$store.dispatch("list/getList", this.$route.params.id);
  },
};
</script>
