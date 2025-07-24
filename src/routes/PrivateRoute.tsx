import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { JSX } from "react"

interface Props {
    children: JSX.Element
}

export function PrivateRoute({ children }: Props) {
    const { isAuthenticated } = useAuth()

    return isAuthenticated ? children : <Navigate to="/" replace />
}
