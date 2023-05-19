<script setup lang="ts">
const handleImageUpload = (img: File | string) => {
  console.log(img)
};

</script>

<template>
    <div class="mx-2">
       <h3 class="text-4xl">Create Post</h3>
       <span class="mb-2">Add post image</span>
       <ImageUpload class="mt-5" @update:image="handleImageUpload" />
    </div>
</template>