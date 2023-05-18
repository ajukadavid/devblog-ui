<template>
    <div>
     this is le index
 
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