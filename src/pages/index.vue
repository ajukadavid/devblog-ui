<template>
  <div>
    <div class="mx-4">
      <span class="text-2xl text-signupBorder font-bold my-4">Recent posts</span>
      <div class="d-flex flex-col gap-4 w-full h-screen">
        <div v-for="post in posts" :key="post.id" class="w-full  border border-signupBorder">
          <div class="w-full">
            <div>
              <img v-if="post.image" :src="post.image" class="w-full" />
              <img v-else src="../assets/download.png" class="w-full" />
            </div>
            <span>{{ post.title }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import cookie from 'cookiejs'
import { getAllPosts } from '../services/post-service'
let $router = useRouter()
const posts = ref<any>([])

onMounted(() => {

})

onMounted(async () => {
  let val = await getAllPosts()
  posts.value = val.data
  let token = cookie.get("token")
  if (!token) {
    $router.push('/signup')
  }
})
</script>