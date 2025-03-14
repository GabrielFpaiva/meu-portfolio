import { NextRequest, NextResponse } from "next/server"

const CLIENT_ID = "87e7534580c5444d9557d30c0cc8a4cd"
const CLIENT_SECRET = "d051fbba0fc04a17aaff2a1b5d2556db"
const REDIRECT_URI = "http://localhost:3000/api/spotify/callback"

// Simulação de banco de dados (armazenando na memória)
let storedAccessToken = ""
let storedRefreshToken = ""

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const code = url.searchParams.get("code")

  if (!code) {
    return NextResponse.json({ error: "Código de autenticação não encontrado" }, { status: 400 })
  }

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      }).toString(),
    })

    if (!response.ok) {
      throw new Error("Erro ao obter token de acesso do Spotify")
    }

    const data = await response.json()

    // **Armazenamos os tokens temporariamente**
    storedAccessToken = data.access_token
    storedRefreshToken = data.refresh_token

    return NextResponse.json({
      message: "Autenticado com sucesso!",
      access_token: storedAccessToken,
      refresh_token: storedRefreshToken,
    })
  } catch (error) {
    console.error("Erro na autenticação do Spotify:", error)
    return NextResponse.json({ error: "Erro ao autenticar com o Spotify" }, { status: 500 })
  }
}
