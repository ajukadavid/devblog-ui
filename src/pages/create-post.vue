<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { createPost } from '../services/post-service'
import { useCloudinary } from "../composables/useCloudinary";


const image = ref<File | string>("");
const editor = ref<any>(null)
const content = ref<any>('')
const title = ref('')
const body = ref('')
const $router = useRouter()
const isLoading = ref(false)

const handleTextChange = () => {
  let val = editor.value.getHTML()
  body.value = val

}

const handleImageUpload = async (img: File | string) => {
  let val = await useCloudinary(img as unknown as File);
  image.value = val;
};

const handleCreatePost = async () => {
  isLoading.value = true
  try {
    let res = await createPost(title.value, body.value, image.value as unknown as string)
    console.log(res)
    isLoading.value = false
    $router.push('/')
  } catch (err) {

  }

}
</script>
<template>
  <div class="mx-2 flex flex-col justify-center">
    <div class="w-full my-2 justify-center flex">
      <h3 class="text-3xl">Create Post</h3>
    </div>
    <div class="my-4 w-full flex">
      <span class="mr-3 text-signupBorder">Title:</span>
      <input type="text" placeholder="post title" v-model="title" class="outline-signupBorder w-full pl-2" />
    </div>
    <ImageUpload isPostImage titleText="Add thumbnail" class="mt-5" @update:image="handleImageUpload" />
    <div class="my-3">
      <ClientOnly>
        <QuillEditor ref="editor" theme="snow" v-model:content="content" @textChange="handleTextChange" />
      </ClientOnly>
    </div>


    <div class="w-full mt-5 ">
      <spinner v-if="isLoading" />
      <button v-else
        class="bg-signupBorder border rounded border-signupBorder text-white px-5 py-1 shadow-md cursor-pointer"
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
