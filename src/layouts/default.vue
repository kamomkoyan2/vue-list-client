<template>
  <div>
    <Navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
export default {
  name: "default",
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style scoped></style>
