<template>
  <ProfileSettingsSideBar />
</template>

<script>
import { mapGetters } from "vuex";
import ProfileSettingsSideBar from "../components/ProfileSettingsSideBar.vue"

export default {
  name: "UserSettings",
  components: {
    ProfileSettingsSideBar
  },
  computed: {
    ...mapGetters({
      user: "user/getUser",
      token: "user/token",
    }),
  },
  data() {
    return {
      username: "",
      firstName: "",
      lastName: "",
    };
  },

};
</script>

<style scoped></style>
