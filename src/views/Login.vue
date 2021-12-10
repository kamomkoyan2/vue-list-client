<template>
  <div class="grid justify-items-center flex-shrink md:flex-shrink-0">
    <div class="w-2/5 bg-white">
      <div class="p-8">
        <div class="grid justify-items-center">
          <h1 class="text-2xl">Login</h1>
        </div>
        <!--alert message-->
        <div
          class="shadow-lg mt-3 pt-3 pb-3 w-full text-white text-center hover:bg-indigo-400 rounded-full cursor-pointer"
          v-if="reg_show_alert"
          :class="reg_alert_variant"
        >
          {{ reg_alert_msg }}
        </div>

        <vee-form :validation-schema="schema">
          <!-- Username -->
          <div>
            <label for="username" class="text-xs text-gray-500">Username</label>
            <input
              v-model="username"
              id="username"
              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-700 pb-1 focus:outline-none"
              type="text"
              placeholder=""
            />
            <ErrorMessage class="text-red-600" name="username" />
          </div>
          <!-- Password -->
          <div>
            <label id="password" class="text-xs text-gray-500">Password</label>
            <input
              v-model="password"
              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-grey-700 pb-1 focus:outline-none"
              type="password"
              placeholder=""
            />
            <ErrorMessage class="text-red-600" name="password" />
          </div>
          <button
            :disabled="reg_in_submission"
            @click.prevent="login"
            class="shadow-lg mt-3 pt-3 pb-3 w-full text-white bg-indigo-500 hover:bg-indigo-400 rounded-full cursor-pointer"
            type="submit"
            value="Login"
          >
            Login
          </button>
        </vee-form>
        <div class="text-center mt-4">
          <p class="text-sm text-gray-600">
            You have not Account, Please
            <a
              href="/register"
              class="no-underline text-indigo-500 font-bold hover:text-indigo-400"
              >Register</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "../services/AuthService";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      schema: {
        username: "required|min:3|max:50|alpha_spaces",
        password: "required",
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: "bg-indigo-500",
      reg_alert_message: "Please wait! Account is being registered.",
    };
  },
  methods: {
    register(values) {
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_alert_variant = "bg-indigo-500";
      this.reg_alert_msg = "Please wait! Your account is being created.";
      this.reg_alert_variant = "bg-blue-500";
      this.reg_alert_msg = "Success! Your account has been created.";
      console.log(values);
    },

    async login() {
      try {
        const credentials = {
          username: this.username,
          password: this.password,
        };
        const response = await AuthService.login(credentials);

        const token = response.token;
        const user = response.user;

        this.$store.dispatch("login", { token, user });
        this.$router.push("/");
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>
