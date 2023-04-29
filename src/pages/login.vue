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
        <div class="w-full lg:p-0 px-8 py-5  lg:justify-center lg:flex items-center">
        <div
          class="border-2 rounded-lg w-full border-signupBorder flex flex-col justify-items-center"
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
                type="email"
                id="email"
                class="w-full border border-signupBorder rounded p-2"
                placeholder="john.doe@company.com"
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
                class="w-full border border-signupBorder rounded p-2"
                required
              />
              <!-- <span v-if="vp$.password.$errors.length" class="mb-1 text-red-600">{{ vp$.password.$errors[0].$message }}</span> -->
            </div>
            </form>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  </template>

<script lang="ts" setup>
</script>

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