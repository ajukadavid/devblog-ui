import axios from 'axios'
export const BASE_URL = 'https://blog-api-zo90.onrender.com'
import cookie from 'cookiejs'


export const signUp = async (data: FormData) => {
 let req = await axios.post(`${BASE_URL}/signUp`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    cookie("token", req.data.token, 7)
    return req.data.token
};



export const logIn = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/signIn`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    cookie("token", response.data.token, 3)
    return {
      error: null,
      data: response.data,
    };
  } catch (error:any) {
    return {
      error: error.response.data,
      data: null,
    };
  }
};



