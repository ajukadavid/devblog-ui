<script setup lang="ts">

const image = ref<File | string>("");

const handleImageUpload = (img: File | string) => {
    image.value = img;
};

</script>

<template>
    <div class="mx-2">
       <h3 class="text-4xl">Create Post</h3>
       <ImageUpload isPostImage titleText="Add post image" class="mt-5" @update:image="handleImageUpload" />
    </div>
</template>