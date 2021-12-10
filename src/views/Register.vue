<template>
  <div class="grid justify-items-center flex-shrink md:flex-shrink-0">
    <div class="w-2/5 bg-white">
      <div class="p-8">
        <div class="grid justify-items-center">
          <h1 class="text-2xl">Register</h1>
        </div>
        <div
          class="shadow-lg mt-3 pt-3 pb-3 w-full text-white text-center hover:bg-indigo-400 rounded-full cursor-pointer"
          v-if="reg_show_alert"
          :class="reg_alert_variant"
        >
          {{ reg_alert_msg }}
        </div>

        <vee-form :validation-schema="schema">
          <!-- First Name -->
          <div>
            <label for="First Name" class="text-xs text-gray-500"
              >First Name</label
            >
            <input
              v-model="firstName"
              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-700 pb-1 focus:outline-none"
              type="text"
              placeholder=""
            />
            <ErrorMessage class="text-red-600" name="first Name" />
          </div>
          <!-- Last Name -->
          <div>
            <label for="Last Name" class="text-xs text-gray-500"
              >Last Name</label
            >
            <input
              v-model="lastName"
              id="lastName"
              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-700 pb-1 focus:outline-none"
              type="text"
              placeholder=""
            />
            <ErrorMessage class="text-red-600" name="lastName" />
          </div>
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
            @click.prevent="signUp"
            class="shadow-lg mt-3 pt-3 pb-3 w-full text-white bg-indigo-500 hover:bg-indigo-400 rounded-full cursor-pointer"
            type="submit"
          >
            Create Account
          </button>
        </vee-form>
        <div class="text-center mt-4">
          <p class="text-sm text-gray-600">
            Already have an account?
            <a
              href="/login"
              class="no-underline text-indigo-500 font-bold hover:text-indigo-400"
              >Sign in</a
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
  name: "Register",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      schema: {
        username: "required|min:3|max:50|alpha_spaces",
        password: "required",
        firstName: "required",
        lastName: "required",
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: "bg-indigo-500",
      reg_alert_message: "Please wait! Account is being registered.",
      reg_alert_msg: "",
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
    async signUp() {
      try {
        const credentials = {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
        };
        const response = await AuthService.signUp(credentials);
        console.log(response);
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
