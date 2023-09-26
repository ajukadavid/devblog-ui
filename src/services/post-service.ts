import { BASE_URL } from "./auth-service";
import cookie from 'cookiejs'
import axios from 'axios'

let token = cookie.get('token') 


export const createPost = async (title:string, body:string, image?:string) => {
    const data = {
        title, 
        body, 
        image
    }
    let res = await axios.post(`${BASE_URL}/api/post/create`, data, {
        headers: {
            'Authorization': `Bearer ${token}` 
          }
    })
}

export const getAllPosts = async () => {
    let res = await axios.get(`${BASE_URL}/api/posts`, {
        headers: {
            'Authorization': `Bearer ${token}` 
          }
    })

    return res.data
}

export const getOnePost = async (id:string) => {
    let res = await axios.get(`${BASE_URL}/api/post/view/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}` 
          }
    })

    return res
}   

export const getMyPosts = async (id:string) => {
    let res = await axios.get(`${BASE_URL}/api/post/user/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}` 
          }
    })

    return res
}   