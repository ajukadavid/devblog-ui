<template>
  <div class=" mx-4 pt-10">
    <span class="text-2xl text-signupBorder font-bold my-4">Recent posts</span>
    <div v-if="postsLoading" class="h-screen w-screen flex items-center justify-center">
      <Spinner />
    </div>
    <div v-else class="flex lg:flex-row lg:flex-wrap flex-col gap-4 w-full h-screen pb-10">
      <div @click="$router.push(`posts/${post.id}`)" v-for="post in posts" :key="post.id"
        class="cursor-pointer lg:w-80 w-full shadow-lg my-2 rounded-lg border-4 border-transparent bg-transparent">
        <div class="w-full flex flex-col place-content-between">
          <div class="self h-60">
            <img v-if="post.image" :src="post.image" class="w-full h-full" />
            <img v-else src="../assets/download.png" class="w-full h-full" />
          </div>
          <div class="w-full hover:bg-slate-700 text-white items-center flex justify-between pl-4 py-3 bg-slate-800">
            <div class="flex flex-col">
              <span class="text-xl ">{{ post.title }}</span>
            <span class="text-base mt-3">Author: {{ post.user }}</span>
            </div>
            <div>
                {{ post.createdAt }}
            </div>
         
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