<template>
  <div class="grid justify-items-center flex-shrink md:flex-shrink-0">
    <div class="w-3/5 bg-white">
      <div class="p-8">
        <!--alert message-->
        <div
          class="shadow-lg mt-3 pt-3 pb-3 w-full text-white text-center hover:bg-indigo-400 rounded-full cursor-pointer"
          v-if="reg_show_alert"
          :class="reg_alert_variant"
        >
          {{ reg_alert_msg }}
        </div>

        <vee-form :validation-schema="schema" @submit="register">
          <!-- First Name -->
          <div>
            <label for="First Name" class="text-xs text-gray-500"
              >First Name</label
            >
            <vee-field
              name="firstname"
              id="firstname"
              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-700 pb-1 focus:outline-none"
              type="text"
              placeholder=""
            />
            <ErrorMessage class="text-red-600" name="firstname" />
          </div>
          <!-- Last Name -->
          <div>
            <label for="Last Name" class="text-xs text-gray-500"
              >Last Name</label
            >
            <vee-field
              name="lastname"
              id="lastname"
              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-700 pb-1 focus:outline-none"
              type="text"
              placeholder=""
            />
            <ErrorMessage class="text-red-600" name="Last Name" />
          </div>
          <!-- Username -->
          <div>
            <label for="username" class="text-xs text-gray-500">Username</label>
            <vee-field
              name="username"
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
            <vee-field
              id="password"
              name="password"
              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-grey-700 pb-1 focus:outline-none"
              type="password"
              placeholder=""
            />
            <ErrorMessage class="text-red-600" name="password" />
          </div>
          <button
            :disabled="reg_in_submission"
            @click="signUp"
            class="shadow-lg mt-3 pt-3 pb-3 w-full text-white bg-indigo-500 hover:bg-indigo-400 rounded-full cursor-pointer"
            type="submit"
            value="Create account"
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
  name: "Regiser",
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
    async signUp() {
      try {
        const credentials = {
          username: this.username,
          password: this.password,
        };
        const response = await AuthService.signUp(credentials);
        this.msg = response.msg;
        this.$router.push("/");
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    },
  },
};
</script>
