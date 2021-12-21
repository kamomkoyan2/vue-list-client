<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <div
      class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md"
    >
      <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
        Join us Now
      </div>
      <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
        Enter your credentials to get access account
      </div>

      <div class="mt-10">
        <form action="#">
          <div class="flex flex-col mb-5">
            <label
              for="First Name"
              class="mb-1 text-xs tracking-wide text-gray-600"
              >First Name:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-blue-600"
              >
                <font-awesome-icon icon="user-tie" />
              </div>

              <input
                id="firstName"
                v-model="firstName"
                type="text"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div class="flex flex-col mb-5">
            <label
              for="Last Name"
              class="mb-1 text-xs tracking-wide text-gray-600"
              >Last Name:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-blue-600"
              >
                <font-awesome-icon icon="user-tie" />
              </div>

              <input
                id="lastName"
                v-model="lastName"
                type="text"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your surname"
              />
            </div>
          </div>
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
              @click.prevent="signUp"
              class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
            >
              <span class="mr-2 uppercase">Sign Up</span>
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
          >You have an account?
          <a href="/login" class="text-xs ml-2 text-blue-500 font-semibold"
            >Login here</a
          ></span
        >
      </a>
    </div>
  </div>

  <!--  <div class="grid justify-items-center flex-shrink md:flex-shrink-0">-->
  <!--    <div class="w-2/5 bg-white">-->
  <!--      <div class="p-8">-->
  <!--        <div class="grid justify-items-center">-->
  <!--          <h1 class="text-2xl">Register</h1>-->
  <!--        </div>-->
  <!--        <div-->
  <!--          class="shadow-lg mt-3 pt-3 pb-3 w-full text-white text-center hover:bg-indigo-400 rounded-full cursor-pointer"-->
  <!--          v-if="reg_show_alert"-->
  <!--          :class="reg_alert_variant"-->
  <!--        >-->
  <!--          {{ reg_alert_msg }}-->
  <!--        </div>-->

  <!--        <vee-form :validation-schema="schema">-->
  <!--          &lt;!&ndash; First Name &ndash;&gt;-->
  <!--          <div>-->
  <!--            <label for="First Name" class="text-xs text-gray-500"-->
  <!--              >First Name</label-->
  <!--            >-->
  <!--            <input-->
  <!--              v-model="firstName"-->
  <!--              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-700 pb-1 focus:outline-none"-->
  <!--              type="text"-->
  <!--              placeholder=""-->
  <!--            />-->
  <!--            <ErrorMessage class="text-red-600" name="first Name" />-->
  <!--          </div>-->
  <!--          &lt;!&ndash; Last Name &ndash;&gt;-->
  <!--          <div>-->
  <!--            <label for="Last Name" class="text-xs text-gray-500"-->
  <!--              >Last Name</label-->
  <!--            >-->
  <!--            <input-->
  <!--              v-model="lastName"-->
  <!--              id="lastName"-->
  <!--              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-700 pb-1 focus:outline-none"-->
  <!--              type="text"-->
  <!--              placeholder=""-->
  <!--            />-->
  <!--            <ErrorMessage class="text-red-600" name="lastName" />-->
  <!--          </div>-->
  <!--          &lt;!&ndash; Username &ndash;&gt;-->
  <!--          <div>-->
  <!--            <label for="username" class="text-xs text-gray-500">Username</label>-->
  <!--            <input-->
  <!--              v-model="username"-->
  <!--              id="username"-->
  <!--              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-700 pb-1 focus:outline-none"-->
  <!--              type="text"-->
  <!--              placeholder=""-->
  <!--            />-->
  <!--            <ErrorMessage class="text-red-600" name="username" />-->
  <!--          </div>-->
  <!--          &lt;!&ndash; Password &ndash;&gt;-->
  <!--          <div>-->
  <!--            <label id="password" class="text-xs text-gray-500">Password</label>-->
  <!--            <input-->
  <!--              v-model="password"-->
  <!--              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-grey-700 pb-1 focus:outline-none"-->
  <!--              type="password"-->
  <!--              placeholder=""-->
  <!--            />-->
  <!--            <ErrorMessage class="text-red-600" name="password" />-->
  <!--          </div>-->
  <!--          <button-->
  <!--            :disabled="reg_in_submission"-->
  <!--            @click.prevent="signUp"-->
  <!--            class="shadow-lg mt-3 pt-3 pb-3 w-full text-white bg-indigo-500 hover:bg-indigo-400 rounded-full cursor-pointer"-->
  <!--            type="submit"-->
  <!--          >-->
  <!--            Create Account-->
  <!--          </button>-->
  <!--        </vee-form>-->
  <!--        <div class="text-center mt-4">-->
  <!--          <p class="text-sm text-gray-600">-->
  <!--            Already have an account?-->
  <!--            <a-->
  <!--              href="/login"-->
  <!--              class="no-underline text-indigo-500 font-bold hover:text-indigo-400"-->
  <!--              >Sign in</a-->
  <!--            >-->
  <!--          </p>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
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
        this.$router.push("/auth/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
