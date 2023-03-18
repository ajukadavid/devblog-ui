// import { ref } from 'vue';
// import cloudinary from 'cloudinary';

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// interface UploadResult {
//   public_id: string;
//   secure_url: string;
// }

// export default function useCloudinary() {
//   const uploadResult = ref<UploadResult | null>(null);

//   async function uploadImage(imageUrl: string) {
//     try {
//       const result = await cloudinary.v2.uploader.upload(imageUrl, { public_id: 'my_image' });
//       uploadResult.value = { public_id: result.public_id, secure_url: result.secure_url };
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return {
//     uploadResult,
//     uploadImage,
//   };
// }
