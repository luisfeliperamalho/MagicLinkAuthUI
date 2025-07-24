import api from "./api"

export async function sendMagicLink(email: string) {
    return api.post("token/sendEmail", { email })
}

export function validateToken(token: string) {
    return api.get("/token/validate", { params: { token } })
}