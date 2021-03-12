export const BASE_URL = "https://apisoundlab.herokuapp.com"

export const axiosConfig = {
    headers: {
        Authorization: localStorage.getItem('accessToken')
    }
}