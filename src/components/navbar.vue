<script setup lang="ts">

const showMenu = ref(false)

const menuItems = ref([
    {
    name: 'Popular',
    id: 0
    },
    {
    name: 'New',
    id: 1
    }, 
    {
    name: 'Topics',
    id: 2
    },
    {
    name: 'Create Post',
    id: 3
    }
])

</script>

<template>
    <div class=" w-full mt-5 h-5">
        <div class="flex flex-col">
            <div class="flex justify-between items-center">
                <div class="flex justify-center w-fit nav__wrapper rounded">
                    <div class="h-11 ">
                        <img src="../static/app-logo.png" class="w-fit h-fit" />
                    </div>
                </div>
                <div>
                    <ul class="hidden lg:flex gap-x-8">
                        <li v-for="item in menuItems" :key="item.id">{{item.name}}</li>
                    </ul>
                    <div class="block mr-2 lg:hidden">
                        <div class="space-y-2" @click="showMenu = !showMenu">
                            <div class="w-8 h-0.5 bg-gray-600"></div>
                            <div class="w-8 h-0.5 bg-gray-600"></div>
                            <div class="w-8 h-0.5 bg-gray-600"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Transition>
                <div v-if="showMenu" class="w-full ml-auto">
                    <ul class="flex flex-col ">
                        <li class="my-6 " v-for="item in menuItems" :key="item.id">{{item.name}}</li>
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