<script lang="ts" setup>
import { validateLogin } from '../composables/useValidate'

const { v$, form } = validateLogin()


</script>

<template>
    <div class="w-full lg:flex overflow-hidden h-screen pb-1">
      <div class="lg:w-1/2 hidden  lg:block login__bg lg:items-center lg:h-screen">
        <div class="bg__overlay">
          <div class="flex justify-center w-fit nav__wrapper ml-10 mt-10 rounded">
            <div class="h-11 ">
              <img src="../static/app-logo.png" class="w-fit h-fit" />
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2 lg:p-4 mb-10 h-screen flex justify-center items-center">
        <div class="w-full lg:px-10  lg:justify-center lg:flex items-center">
        <div
          class="border-2 rounded-lg pb-20 w-full border-signupBorder flex flex-col justify-items-center"
        >
          <div class="flex justify-center mt-20 mb-10">
            <span class="text-signupBorder text-4xl font-bold font-sans mr-1"
              >Login</span
            >
          </div>
          <div class="flex flex-col items-center">
            <form @click.prevent="" class="w-full px-8">
                <div class="mb-6 flex flex-col">
              <label
                for="email"
                class="block mb-2 text-base font-sans text-gray-700"
                >Email address</label
              >
              <input
                type="username"
                v-model="form.password"
                id="username"
                class="w-full border border-signupBorder rounded p-2"
                placeholder="your username"
                required
              />
              <!-- <span v-if="v$.email.$errors.length" class="mb-1 text-red-600">{{ v$.email.$errors[0].$message }}</span> -->
            </div>
            <div class="mb-6 flex flex-col">
              <label
                for="password"
                class="block mb-2 text-base font-sans text-gray-700"
                >Password</label
              >
              <input
                type="password"
                id="password"
                v-model="form.password"
                class="w-full border border-signupBorder rounded p-2"
                required
              />
              <!-- <span v-if="vp$.password.$errors.length" class="mb-1 text-red-600">{{ vp$.password.$errors[0].$message }}</span> -->
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
            <div class="flex lg:flex-col flex-col-reverse">
              <div class="flex lg:items-end items-center flex-col my-4">
              <span class="text-gray-700">Don't have an account?</span>
              <span @click="" class="text-signupBorder text-md cursor-pointer">Sign up</span>
            </div>
            <div class="flex justify-center align-se">
              <button
                type="submit"
                class="text-white bg-signupBorder border-signupBorder font-sans cursor-pointer px-28 py-2 border rounded-md"
              >
                Submit
              </button>
            </div>
            </div>
            </form>
          </div>
        </div>
      </div>
      </div>
     
    </div>
</template>



<style scoped>
.login__bg {
  background: url("../static/login-splash-pic.png") no-repeat;
  background-size: cover;
  color: #ffffff;
}
.nav__wrapper {
  backdrop-filter: blur(10px);
  background: white;
}

img {
  max-width: 100%;
  max-height: 100%;
}
.bg__overlay {
  background: rgb(27, 11, 66);
  overflow: hidden;
  opacity: 0.4;
  height: 100%;
  z-index: 2;
}
</style>