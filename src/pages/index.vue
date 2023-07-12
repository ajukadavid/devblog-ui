<template>
  <div>
    this is le index

  </div>
</template>

<script setup lang="ts">
import cookie from 'cookiejs'
import { getAllPosts } from '../services/post-service'
let $router = useRouter()


onMounted(() => {

})

onMounted(async () => {
  let val = await getAllPosts()
  console.log(val)
  let token = cookie.get("token")
  if (!token) {
    $router.push('/signup')
  }
})
</script>