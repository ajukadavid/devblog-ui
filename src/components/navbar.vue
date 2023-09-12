<script setup lang="ts">
import cookie from 'cookiejs'
let token = cookie.get("token")

const showMenu = ref(false)
const $router = useRouter()

const handleRoute = (route: string) => {
    if (route === 'Log Out') {
        cookie.remove('token')
        $router.push(route)

    } else {
        $router.push(route)
        showMenu.value = false
    }

}
const menuItems = ref([
    {
        name: 'Home',
        id: 0,
        route: '/popular'
    },
    // {
    //     name: 'New',
    //     id: 1,
    //     route: '/new'
    // },
    // {
    //     name: 'Topics',
    //     id: 2,
    //     route: '/topics'
    // },
    {
        name: 'Create Post',
        id: 3,
        route: '/create-post'
    },
    {
        name: token ? 'Log Out' : 'Log In',
        id: 4,
        route: '/login'
    }
])

</script>

<template>
    <div class=" w-full h-5  mb-5">
        <div class="flex flex-col ">
            <div class="fixed top-0 w-full px-3">
                <div class="flex bg-white py-4 w-full justify-between items-center">
                    <div class="flex w-[90px] h-[30px] justify-center ml-1  nav__wrapper rounded">
                        <div class="w-full">
                            <img src="../static/app-logo.png" class="w-full h-fit" />
                        </div>
                    </div>
                    <div>

                        <ul class="hidden lg:flex gap-x-8">
                            <li class="cursor-pointer" :class="{ 'mr-5': item.id === 3 }" @click="handleRoute(item.route)"
                                v-for="(item) in menuItems" :key="item.id">{{ item.name }}</li>
                        </ul>
                        <div @click="showMenu = !showMenu" class="block mr-2 lg:hidden">
                            <div class="space-y-2">
                                <div class="w-8 h-0.5 bg-gray-600"></div>
                                <div class="w-8 h-0.5 bg-gray-600"></div>
                                <div class="w-8 h-0.5 bg-gray-600"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Transition>
                <div v-if="showMenu" class="w-full flex justify-center  ml-auto nav__links">
                    <div class="w-full">
                        <ul class="flex flex-col ">
                            <li @click="handleRoute(item.route)" class="my-6 text-white ml-2 text-2xl cursor-pointer"
                                v-for="item in menuItems" :key="item.id">
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                    <div class="text-white mt-5 mr-5">
                        <Icon size="30" @click="showMenu = !showMenu" class="cursor-pointer"
                            name="material-symbols:cancel-outline" />
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.v-enter-active {

    animation: slidein 0.5s;
}

.v-leave-active {
    animation: slideOut 0.5s;
}

.nav__links {
    background: rgba(27, 11, 66, 0.9);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.2px);
    -webkit-backdrop-filter: blur(1.2px);
    border: 1px solid rgba(27, 11, 66, 0.25);

}

@keyframes slidein {
    from {
        margin-left: 100%;
        width: 300%;
    }

    to {
        margin-left: 0%;
        width: 100%;
    }
}

@keyframes slideOut {
    to {
        margin-left: 100%;
        width: 300%;
    }

    from {
        margin-left: 0%;
        width: 100%;
    }
}

.nav__wrapper {
    backdrop-filter: blur(10px);
    background: white;
}

img {
    max-width: 100%;
    max-height: 100%;
}
</style>