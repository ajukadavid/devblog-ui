<template>
    <div class="w-full flex">
        <div class="w-1/2 justify-center flex login__bg items-center h-screen">
        </div>
        <div class="w-1/2 justify-center flex bg-white items-center h-screen">
            <div class="border border-signupBorder ">

                <form>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                    </div>
                    <div class="mb-6">
                        <label for="username" class="block mb-2 text-sm font-medium text-blue-500">Username</label>
                        <input type="text" id="username"
                            class=""
                            placeholder="john.doe@company.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-blue-500">Email
                            address</label>
                        <input type="email" id="email"
                            class=""
                            placeholder="john.doe@company.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-blue-500">Password</label>
                        <input type="password" id="password"
                            class=""
                            placeholder="john.doe@company.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="confirmPassword" class="block mb-2 text-sm font-medium text-blue-500">Confirm Password</label>
                        <input type="password" id="confirmPassword"
                            class="" required>
                    </div>
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value=""
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                required>
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree
                            with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and
                                conditions</a>.</label>
                    </div>
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.login__bg {
    background: url('../static/login-splash-pic.png') no-repeat;
    background-size: cover;

}
</style>