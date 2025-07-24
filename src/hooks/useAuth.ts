import { useEffect, useState } from "react"

export function useAuth() {
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        const jwt = localStorage.getItem("auth_token")
        if (jwt) {
            setToken(jwt)
        }
    }, [])


    const logout = () => {
        localStorage.removeItem("auth_token")
        setToken(null)
        window.location.href = "/" // Redireciona para login
    }

    return {
        isAuthenticated: !!token,
        token,
        logout,
    }
}
