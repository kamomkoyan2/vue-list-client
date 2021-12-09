<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="product in products" :key="product.id">
      {{ product.title }}, {{ product.price }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Lists",
  data() {
    return {
      msg: "Welcome to my Vuex Store Getter example",
    };
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
};
</script>
