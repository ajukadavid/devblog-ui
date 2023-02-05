<template>
    <div class="w-full flex">
        <div class="w-1/2 justify-center flex login__bg items-center h-screen">
        </div>
        <div class="w-1/2 justify-center flex bg-white items-center h-screen">
            <div class="border-2 rounded-lg w-full border-signupBorder p-10 mx-16">

                <form class="w-full">
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                    </div>
                    <div class="mb-6">
                        <label for="username" class="block mb-2 text-base font-mono text-signupBorder">Username</label>
                        <input type="text" id="username"
                            class="w-full border border-signupBorder rounded p-2" required>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-base font-mono text-signupBorder">Email
                            address</label>
                        <input type="email" id="email"
                        class="w-full border border-signupBorder rounded p-2"
                            placeholder="john.doe@company.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-base font-mono text-signupBorder">Password</label>
                        <input type="password" id="password"
                        class="w-full border border-signupBorder rounded p-2" required>
                    </div>
                    <div class="mb-6">
                        <label for="confirmPassword" class="block mb-2 text-base font-mono text-signupBorder">Confirm Password</label>
                        <input type="password" id="confirmPassword"
                        class="w-full border border-signupBorder rounded p-2" required>
                    </div>
                    <div class="flex items-start mb-6 w-full">
                        <div class="flex items-center h-5 ">
                            <input id="remember" type="checkbox" value=""
                                class="w-4 mt-1 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                required>
                        </div>
                        <label for="remember" class="ml-2 text-base font-mono text-signupBorder">Remember me</label>
                    </div>
                    <button type="submit"
                        class="text-white bg-signupBorder font-mono px-8 py-2 border rounded-md ">Submit</button>
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
input:focus {
    outline: #5B6BBC;
    border: 2px solid #5B6BBC
}
</style>