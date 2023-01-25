import axios from "axios"
export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "b70d6178-f0c4-4a14-a606-43daa0c76dd4"},
})