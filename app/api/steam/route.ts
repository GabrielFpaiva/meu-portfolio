import { NextResponse } from "next/server"

const STEAM_API_KEY = "0A1FC04FF8AD927601C6F8B8EB9FE216"
const STEAM_ID = "76561198377279330"

export async function GET() {
  try {
    const response = await fetch(
      `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&format=json`
    )

    if (!response.ok) {
      throw new Error("Erro ao buscar dados da Steam")
    }

    const data = await response.json()
    return NextResponse.json(data) // Retorna JSON corretamente
  } catch (error) {
    console.error("Erro na API da Steam:", error)
    return NextResponse.json({ error: "Erro ao obter jogos recentes" }, { status: 500 })
  }
}
