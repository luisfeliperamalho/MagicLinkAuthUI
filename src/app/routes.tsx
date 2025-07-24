import { Route } from "react-router-dom"
import Login from "../pages/Login"
import Validate from "../pages/Validate"
import Dashboard from "../pages/Dashboard"
import { PrivateRoute } from "../routes/PrivateRoute"

export const routes = (
    <>
        <Route path="/" element={<Login />} />
        <Route path="/validate" element={<Validate />} />
        <Route
            path="/dashboard"
            element={
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            }
        />
    </>
)
