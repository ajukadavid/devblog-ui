<script setup lang="ts">
const imageInput = ref<HTMLInputElement | null>(null)
const img = ref<File | Blob | null>(null);
const url = ref<string | null>(null);
const inputKey = ref(0)
const emit = defineEmits(['update:image'])
const handleFileUpload = async (e:any) => {
   img.value = e.target.files[0]
   url.value = URL.createObjectURL(img.value!)
  
   showDelete.value = true
   inputKey.value++
   emit('update:image', img.value)
}
const showDelete = ref(false)
const handleDeleteImage = () => {
    url.value = null
    img.value =  null
    showDelete.value = false
    inputKey.value++
}
</script>

<template>
  <section>
    <div class="flex flex-col items-center">
    <input type="file"
       id="avatar" name="avatar"
       class="hidden"
       ref="imageInput"
       :key="inputKey"
       @change="handleFileUpload"
       accept="image/*">
       <div class="flex">
         <div class="border-4 w-[98px] rounded-full border-signupBorder h-[98px] cursor-pointer">
             <img class="w-full h-full rounded-full border-0" :src="url!" v-if="url" />
              <Icon v-if="!url" size="90" @click="imageInput!.click()" class="text-signupBorder" name="material-symbols:account-circle" /> 
         </div>
          <Icon v-if="showDelete" size="20" @click="handleDeleteImage" class="text-red-600 self-end cursor-pointer" name="material-symbols:delete" />     
       </div>
      <span class="mt-4 text-signupBorder">Upload your profile picture</span>
    </div>
  </section>
</template>

<style scoped></style>
