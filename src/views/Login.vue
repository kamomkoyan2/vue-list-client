<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <div
      class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md"
    >
      <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
        Login
      </div>
      <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
        Enter your credentials to get access account
      </div>

      <div class="mt-10">
        <form action="#">
          <div class="flex flex-col mb-5">
            <label
              for="username"
              class="mb-1 text-xs tracking-wide text-gray-600"
              >Username:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-blue-600"
              >
                <font-awesome-icon icon="user" />
              </div>

              <input
                id="username"
                type="text"
                v-model="username"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your username"
              />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label
              for="password"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >Password:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-blue-600"
              >
                <span>
                  <font-awesome-icon icon="user-secret" />
                </span>
              </div>

              <input
                id="password"
                type="password"
                v-model="password"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div class="flex w-full">
            <button
              type="submit"
              :disabled="reg_in_submission"
              @click.prevent="login"
              class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
            >
              <span class="mr-2 uppercase">Login</span>
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex justify-center items-center mt-6">
      <a
        href="#"
        target="_blank"
        class="inline-flex items-center text-gray-700 font-medium text-xs text-center"
      >
        <span class="ml-2"
          >You haven't an account? PLease
          <a href="/register" class="text-xs ml-2 text-blue-500 font-semibold"
            >Register here</a
          ></span
        >
      </a>
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
        console.log(user)

        this.$store.dispatch("user/login", { token, user });
        await this.$router.push("/");
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>
