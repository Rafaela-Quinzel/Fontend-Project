export const BASE_URL = "http://localhost:3003"

export const axiosConfig = {
    headers: {
        Authorization: window.localStorage.getItem('token')
    }
}