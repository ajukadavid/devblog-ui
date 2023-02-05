import axios from 'axios'
const baseUrl = process.env.BASE_URL

export const signUp = (data: FormData) => {
    axios.post(`${baseUrl}/signUp`, {
    data
}).then((res:any) => {
    console.log(res)
}).catch((err:any) => {
    console.log(err)
})
}
