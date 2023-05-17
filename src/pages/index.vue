<template>
    <div>
        <h1 class="text-3xl text-red-500 font-bold underline">
    Hello world!
  </h1>
</div>
</template>

<script setup lang="ts">
import cookie from 'cookiejs'

let $router = useRouter()

onMounted(() => {
  let token = cookie.get("token")
  if(!token) {
    $router.push('/signup')
  }
})
</script>