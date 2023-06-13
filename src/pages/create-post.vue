<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const image = ref<File | string>("");
const editor = ref<any>(null)
const content = ref<any>('')

const handleTextChange = () =>{
let val = editor.value.getHTML()
}

const handleImageUpload = (img: File | string) => {
    image.value = img;
};
</script>
<template>
  <div class="mx-2 flex flex-col justify-center">
       <h3 class="text-4xl">Create Post</h3>
       <ImageUpload isPostImage titleText="Add post image" class="mt-5" @update:image="handleImageUpload" />
    <ClientOnly>
      <QuillEditor ref="editor" theme="snow" v-model:content="content" @update:content="handleTextChange"/>
    </ClientOnly>    
  </div>
</template>
<style scoped lang="css">
:deep(.ql-editor) {
  min-height: 200px;
}
:deep(.ql-toolbar.ql-snow) {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
:deep(.ql-container.ql-snow) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
