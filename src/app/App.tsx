import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import ValidateTokenPage from "../pages/Validate"
import Dashboard from "../pages/Dashboard"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/validate" element={<ValidateTokenPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
