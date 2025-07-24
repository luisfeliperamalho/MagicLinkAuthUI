import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { validateToken } from "../../services/authService";

export default function ValidatePage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get("token");
        if (!token) {
            alert("Token não encontrado na URL");
            navigate("/");
            return;
        }

        validateToken(token)
            .then((res) => {
                localStorage.setItem("auth_token", res.data.token);
                navigate("/dashboard");
            })
            .catch(() => {
                alert("Token inválido ou expirado.");
                navigate("/");
            });
    }, [searchParams, navigate]);

    return <div>Validando token...</div>;
}
