import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5209/api", // Altere se for diferente
    headers: {
        "Content-Type": "application/json",
    },
})

// Interceptor opcional para JWT
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth_token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api