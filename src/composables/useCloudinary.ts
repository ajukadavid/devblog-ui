import { ref } from "vue";
import axios from "axios";

const cloudinaryUrl = "https://api.cloudinary.com/v1_1/ddg2lkmjk/image/upload";
const ImgUrl = ref("");
export const useCloudinary = async (img: File) => {
  const formData = new FormData();
  formData.append("file", img);
  formData.append("upload_preset", "blog-preset");

  let res = await fetch(cloudinaryUrl, { method: "POST",  body: formData})
  const data = await res.json()
  ImgUrl.value = data.secure_url
  return ImgUrl.value;
};
