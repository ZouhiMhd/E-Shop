import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "http://192.168.43.4:8000/api",
})
