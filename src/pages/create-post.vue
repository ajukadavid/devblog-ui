<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const image = ref<File | string>("");
const content = ref<any>('')

const handleTextChange = (delta:any) =>{
//     let html = delta.slice(0, 500).ops.map(function(op:any) {
//    if (typeof op.insert !== 'string') return '';
//    let html = op.insert;
// //    if (op.attributes.bold) {
// //       html = '<strong>' + html + '</strong>';
// //    }
//    return html;
// }).join('');

let output = '';

for (const { insert } of delta) {
  if (typeof insert === 'string') {
    output += insert;
  } else if (typeof insert === 'object' && insert.hasOwnProperty('ops')) {
    for (const op of insert.ops) {
      if (typeof op.insert === 'string') {
        output += op.insert;
      }
    }
  }
}

console.log(output)

return output;



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
      <QuillEditor theme="snow" v-model:content="content" @update:content="handleTextChange"/>
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
