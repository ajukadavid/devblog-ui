<template>
    <div>
        <div class="flex flex-col mx-5">
            <span class="text-2xl">{{ post.title }}</span>
            <div class="w-full mt-8">
                <img :src="post.image" class="w-full" />
            </div>
            <div class="my-5">
                <div v-html="post.body" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" >
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getOnePost } from '../../services/post-service'

const $route = useRoute()

const post = ref<any>({})

onMounted(async () => {
    let res = await getOnePost($route.params.id as unknown as string)
    post.value = res.data.data
})
</script>