import { ref } from 'vue'

const cloudinaryUrl = "https://api.cloudinary.com/v1_1/ddg2lkmjk/image/upload";
const ImgUrl = ref('')
export const generateImageUrl = (img: File) => {
const formData = new FormData()
formData.append("file", img)
formData.append("upload_preset", "blog-preset")

fetch(cloudinaryUrl, {
   method: "POST",
   body: formData
 })
   .then((response) => {
     return response.text();
   })
   .then((data:any) => {
    ImgUrl.value = data.secure_url
   });
}
