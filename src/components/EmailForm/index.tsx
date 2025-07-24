import { useState } from "react"
import { sendMagicLink } from "../../services/authService"

function EmailForm() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        try {
            await sendMagicLink(email)
            setMessage("✅ Verifique seu e-mail para o link de login.")
            setEmail("")
        } catch (err) {
            setMessage("❌ Ocorreu um erro ao enviar o link.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ padding: "8px", marginRight: "8px" }}
            />
            <button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar Magic Link"}
            </button>
            {message && <p style={{ marginTop: "10px" }}>{message}</p>}
        </form>
    )
}

export default EmailForm
