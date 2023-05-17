import axios from 'axios'
const BASE_URL = 'https://blog-api-zo90.onrender.com'
import cookie from 'cookiejs'


export const signUp = async (data: FormData) => {
 let req = await axios.post(`${BASE_URL}/signUp`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    cookie("token", req.data.token, 7)
    req.data.token
};


export const logIn = async (data: any) => {
  let req = await axios.post(`${BASE_URL}/signIn`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  cookie("token", req.data.token, 7)
  return req.data.token
}