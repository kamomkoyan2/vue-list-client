<template>
  <div class="flex flex-col min-h-screen justify-center">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: "app",

  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
