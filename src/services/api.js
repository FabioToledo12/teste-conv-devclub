import axios from "axios";


const api = axios.create({
    baseURL: "https://the-one-api.dev/v2"

})

api.interceptors.request.use( async config => {
    const token = "XFQIZy_29ChBrsAbw1ZC"
    
    config.headers.authorization = `Bearer ${token}`

    return config
} )

export default api