<template>
  <div class=" mx-4 pt-10">
    <span class="text-2xl text-signupBorder font-bold my-4">Recent posts</span>
    <div v-if="postsLoading" class="h-screen w-screen flex items-center justify-center">
      <Spinner />
    </div>
    <div v-else class="d-flex flex-col gap-4 w-full h-screen pb-10">
      <div @click="$router.push(`posts/${post.id}`)" v-for="post in posts" :key="post.id"
        class="cursor-pointer w-full shadow-sm my-2 rounded-lg border-4 border-signupBorder">
        <div class="w-full">
          <div>
            <img v-if="post.image" :src="post.image" class="w-full" />
            <img v-else src="../assets/download.png" class="w-full" />
          </div>
          <div class="w-full hover:bg-purple-700 text-white flex-col flex justify-start pl-4 py-3 bg-signupBorder">
            <span class="text-xl ">{{ post.title }}</span>
            <span class="text-base mt-3">By: {{ post.user }}</span>
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
const postsLoading = ref(false)

onMounted(async () => {

  let token = cookie.get("token")
  if (!token) {
    $router.push('/login')
  }
  postsLoading.value = true
  let val = await getAllPosts()

  posts.value = val.data
  postsLoading.value = false

})
</script>