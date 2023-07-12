<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { createPost } from '../services/post-service'


const image = ref<File | string>("");
const editor = ref<any>(null)
const content = ref<any>('')
const title = ref('')
const body = ref('')

const handleTextChange = () => {
  let val = editor.value.getHTML()
  body.value = val
  console.log(body.value)
  // content.value = val
  // console.log(content.value)
}

const handleImageUpload = (img: File | string) => {
  image.value = img;
};

const handleCreatePost = async () => {
  try {
    let res = await createPost(title.value, body.value)
    console.log(res)
  } catch (err) {

  }

}
</script>
<template>
  <div class="mx-2 flex flex-col justify-center">
    <h3 class="text-4xl">Create Post</h3>
    <div>
      Title: <input type="text" placeholder="post title" v-model="title" />
    </div>
    <ImageUpload isPostImage titleText="Add post image" class="mt-5" @update:image="handleImageUpload" />
    <ClientOnly>
      <QuillEditor ref="editor" theme="snow" v-model:content="content" @textChange="handleTextChange" />
    </ClientOnly>

    <div class="w-full mt-5 ">
      <button class="bg-signupBorder border rounded border-signupBorder text-white px-5 py-1 shadow-md cursor-pointer"
        @click="handleCreatePost">
        Publish post
      </button>
    </div>
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
