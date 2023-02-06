import axios from 'axios'
const BASE_URL = 'https://blog-api-zo90.onrender.com'

export const signUp = (data: FormData) => {
  axios
    .post(`${BASE_URL}/signUp`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    
    })
    .then((res: any) => {
      console.log(res);
      return res;
    })
    .catch((err: any) => {
      console.log(err);
      return err;
    });
};
