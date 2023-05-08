<script setup lang="ts">
import { signUp } from "../services/auth-service";
import { useCloudinary } from "../composables/useCloudinary";
import { validateSignUp, validatePassword } from '../composables/useValidate'

const { form, v$ } = validateSignUp()
const {passwords, vp$} = validatePassword()
const image = ref<File | string>("");
const handleImageUpload = (img: File | string) => {
  image.value = img;
};
const handleSignUp = async () => {
    v$.value.$validate()
    vp$.value.$validate()
    if (v$.value.$invalid || vp$.value.$invalid) {
        return
    }
  const formData = new FormData();
  formData.append("username", form.username!);
  formData.append("email", form.email!);
  formData.append("password", passwords.password!);
  let val = await useCloudinary(image.value as unknown as File);
  formData.append("image", val);
  let sign = signUp(formData);
};
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
    <div class="lg:w-1/2 lg:p-4  flex justify-center items-center">
      <div class="w-full lg:py-10 px-8 py-10  lg:justify-center lg:flex bg-white items-center h-screen">
      <div
        class="border-2 rounded-lg h-full my-2 overflow-auto w-full border-signupBorder p-5 lg:mx-12 flex flex-col justify-items-center"
      >
        <div class="flex justify-center">
          <span class="text-signupBorder text-4xl font-bold font-sans mr-1"
            >Sign Up</span
          >
        </div>
        <div class="flex flex-col items-center">
          <ImageUpload class="mt-5" @update:image="handleImageUpload" />
          <form @click.prevent="" class="w-full mt-3">
            <div class="mb-3 flex flex-col">
              <label
                for="username"
                class="block mb-2 text-base font-sans text-gray-700"
                >Username</label
              >
              <input
                v-model="form.username"
                type="text"
                id="username"
                class="w-full border border-signupBorder rounded p-2"
                required
              />
              <div class="flex flex-wrap" v-if="v$.username.$errors.length">
                <div v-for="error in v$.username.$errors" class="flex mt-1 align-center justify-center">
                  <span class="mr-2 mt-[9px] text-[6px]">
                    ❌
                  </span>
                  <span  class="text-red-600 text-[12px] mt-1">{{ error.$message }}</span>
                </div>
              </div>
              
            </div>
            <div class="mb-3 flex flex-col">
              <label
                for="email"
                class="block mb-2 text-base font-sans text-gray-700"
                >Email address</label
              >
              <input
                v-model="form.email"
                type="email"
                id="email"
                class="w-full border border-signupBorder rounded p-2"
                placeholder="john.doe@company.com"
                required
              />
              <div class="flex flex-wrap" v-if="v$.email.$errors.length">
                <div v-for="error in v$.email.$errors" class="flex mt-1 align-center justify-center">
                  <span class="mr-2 mt-[9px] text-[6px]">
                    ❌
                  </span>
                  <span  class="text-red-600 text-[12px] mt-1">{{ error.$message }}</span>
                </div>
              </div>
            </div>
            <div class="mb-3 flex flex-col">
              <label
                for="password"
                class="block mb-2 text-base font-sans text-gray-700"
                >Password</label
              >
              <div class="border border-signupBorder rounded">
                <input
                v-model="passwords.password"
                type="password"
                id="password"
                class="w-full border-0rounded p-2 outline-none"
                required
              />
              </div>
              <div class="flex flex-wrap" v-if="vp$.password.$errors.length">
                <div v-for="error in vp$.password.$errors" class="flex mt-1 align-center justify-center">
                  <span class="mr-2 mt-[9px] text-[6px]">
                    ❌
                  </span>
                  <span  class="text-red-600 text-[12px] mt-1">{{ error.$message }}</span>
                </div>
              </div>
              </div>
            <div class="mb-3">
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
                v-model="passwords.confirm_password"
              />
              <div class="flex flex-wrap" v-if="vp$.confirm_password.$errors.length">
                <div v-for="error in vp$.confirm_password.$errors" class="flex mt-1 align-center justify-center">
                  <span class="mr-2 mt-[9px] text-[6px]">
                    ❌
                  </span>
                  <span  class="text-red-600 text-[12px] mt-1">{{ error.$message }}</span>
                </div>
              </div>
            </div>
            <div class="flex items-start mb-3 w-full">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 mt-1 h-4  rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
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
              <span class="text-gray-700">Already have an account?</span>
              <span @click="$router.push('/login')" class="text-signupBorder text-md cursor-pointer">Log in</span>
            </div>
            <div class="flex justify-center align-se">
              <button
                type="submit"
                @click="handleSignUp"
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
