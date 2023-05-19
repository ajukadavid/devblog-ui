<script setup lang="ts">

const showMenu = ref(false)
const $router = useRouter()

const handleRoute = (route: string) => {
        $router.push(route)
        showMenu.value = false
}
const menuItems = ref([
    {
    name: 'Popular',
    id: 0,
    route: '/popular'
    },
    {
    name: 'New',
    id: 1,
    route: '/new'
    }, 
    {
    name: 'Topics',
    id: 2,
    route: '/topics'
    },
    {
    name: 'Create Post',
    id: 3,
    route: '/create-post'
    }
])

</script>

<template>
    <div class=" w-full mt-5 h-5 mb-5">
        <div class="flex flex-col">
            <div class="flex justify-between items-center">
                <div class="flex w-[90px] justify-center ml-1  nav__wrapper rounded">
                    <div class=" w-full">
                        <img src="../static/app-logo.png" class="w-full h-fit" />
                    </div>
                </div>
                <div>
                    <ul class="hidden lg:flex gap-x-8">
                        <li v-for="item in menuItems" :key="item.id">{{item.name}}</li>
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
            <Transition>
                <div v-if="showMenu" class="w-full ml-auto">
                    <ul class="flex flex-col nav__links">
                        <li @click="handleRoute(item.route)" class="my-6 text-white ml-2 text-2xl " v-for="item in menuItems" :key="item.id">
                            {{item.name}}
                        </li>
                    </ul>
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