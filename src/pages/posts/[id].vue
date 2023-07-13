<template>
    <div>
        tgis is post page
    </div>
</template>

<script setup lang="ts" >
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getOnePost } from '../../services/post-service'

const $route = useRoute()

onMounted(async () => {
    console.log('checking')
    let res = await getOnePost($route.params.id as unknown as string)
})
</script>