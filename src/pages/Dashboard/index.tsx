import { useAuth } from "../../hooks/useAuth"

function Dashboard() {
    const { logout } = useAuth()

    return (
        <div style={{ padding: "2rem" }}>
            <h1>🎉 Bem-vindo ao Dashboard!</h1>
            <p>Você está autenticado com sucesso.</p>
            <button onClick={logout} style={{ marginTop: "1rem" }}>
                🚪 Sair
            </button>
        </div>
    )
}

export default Dashboard
