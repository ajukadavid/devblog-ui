<script setup lang="ts">

const $route = useRoute()

const showNav = computed(() => {
    if ($route.name === 'login' || $route.name === 'signup') {
        return false
    } else {
        return true
    }
})

</script>

<template>
    <div class=" flex flex-col justify-center lg:block">
        <Navbar v-if="showNav" />
        <div class="font-sans mt-8">
            <slot />
        </div>
    </div>
</template>
  