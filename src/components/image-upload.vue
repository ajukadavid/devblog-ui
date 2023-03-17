<script setup lang="ts">
const imageInput = ref<HTMLInputElement | null>(null)
const img = ref<File | Blob | null>(null);
const url = ref<string | null>(null);
const handleFileUpload = (e:any) => {
   img.value = e.target.files[0]
   url.value = URL.createObjectURL(img.value!)
}
</script>

<template>
  <section>
    <div class="flex flex-col items-center">
    <input type="file"
       id="avatar" name="avatar"
       class="hidden"
       ref="imageInput"
       @change="handleFileUpload"
       accept="image/*">
      <div class="border-4 w-[98px] rounded-full border-signupBorder h[-98px] cursor-pointer">
        <img v-if="url" class="w-full h-full rounded-full border-0" :src="url!"/>
        <Icon v-else size="90" @click="imageInput!.click()" class="text-signupBorder" name="material-symbols:account-circle" />   
    </div>
      <span class="mt-4 text-signupBorder">Upload your profile picture</span>
    </div>
  </section>
</template>

<style scoped></style>
