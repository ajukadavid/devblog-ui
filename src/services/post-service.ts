import { BASE_URL } from "./auth-service";
import cookie from 'cookiejs'
import axios from 'axios'

export const createPost = async (title:string, body:string, image?:string) => {
    let token = cookie.get('token') 
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