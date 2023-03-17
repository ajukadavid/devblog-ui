<template>
  <div class="w-full flex">
    <div class="w-1/2 login__bg items-center h-screen">
      <div class="bg__overlay">
        <div class="flex justify-center w-fit nav__wrapper ml-10 mt-10 rounded">
          <div class="h-11">
            <img src="../static/app-logo.png" class="" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 justify-center flex bg-white items-center h-screen">
      <div
        class="border-2 rounded-lg w-full border-signupBorder p-10 mx-16 flex flex-col justify-items-center"
      >
        <div class="flex justify-center">
          <span class="text-signupBorder text-2xl font-sans">Sign Up</span>
        </div>
        <div>
          <form class="w-full">
            <div class="grid gap-6 mb-6 md:grid-cols-2"></div>
            <div class="mb-6">
              <label
                for="username"
                class="block mb-2 text-base font-sans text-gray-700"
                >Username</label
              >
              <input
                v-model="username"
                type="text"
                id="username"
                class="w-full border border-signupBorder rounded p-2"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-base font-sans text-gray-700"
                >Email address</label
              >
              <input
                v-model="email"
                type="email"
                id="email"
                class="w-full border border-signupBorder rounded p-2"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-base font-sans text-gray-700"
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                id="password"
                class="w-full border border-signupBorder rounded p-2"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="confirmPassword"
                class="block mb-2 text-base font-sans text-gray-700"
                >Confirm Password</label
              >
              <input
                type="password"
                id="confirmPassword"
                class="w-full border border-signupBorder rounded p-2"
                required
              />
            </div>
            <div class="flex items-start mb-6 w-full">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 mt-1 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-base font-sans text-signupBorder"
                >Remember me</label
              >
            </div>
            <div class="flex items-end flex-col my-4">
              <span class="text-gray-700">Already have an account?</span>
              <span class="text-signupBorder text-md">Log in</span>
            </div>
            <button
              type="submit"
              @click="handleSignUp"
              class="text-white bg-signupBorder font-sans px-8 py-2 border rounded-md w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { signUp } from "~~/services/signup-service";

const username = ref("");
const password = ref("");
const email = ref("");

const handleSignUp = () => {
  const formData = new FormData();
  formData.append("username", username.value);
  formData.append("email", email.value);
  formData.append("password", password.value);
  let val = signUp(formData);
};
</script>

<style scoped>
.login__bg {
  background: url("../static/login-splash-pic.png") no-repeat;
  background-size: cover;
  color: #ffffff;
}

.bg__overlay {
  background: rgb(27, 11, 66);
  overflow: hidden;
  opacity: 0.4;
  height: 100%;
  z-index: 2;
}

.nav__wrapper {
  backdrop-filter: blur(10px);
  background: white;
}

img {
  max-width: 100%;
  max-height: 100%;
}
input:focus {
  outline: #5b6bbc;
  border: 2px solid #5b6bbc;
}
</style>
