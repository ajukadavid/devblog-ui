import axios from 'axios'
const BASE_URL = 'https://blog-api-zo90.onrender.com'

export const signUp = async (data: FormData) => {
 let req = await axios.post(`${BASE_URL}/signUp`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  console.log(req.data)
};


export const logIn = async (data: JSON) => {
  let req = await axios.post(`${BASE_URL}/signIn`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}