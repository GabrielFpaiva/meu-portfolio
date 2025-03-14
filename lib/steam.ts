export interface SteamGame {
  name: string
  playtime: number // em minutos
  lastPlayed: string
  imageUrl: string
  appId: number
}

export async function getLastPlayedGame(): Promise<SteamGame | null> {
  try {
    // Agora chamamos a API interna do Next.js
    const response = await fetch("/api/steam")

    if (!response.ok) {
      throw new Error("Erro ao buscar jogos recentes")
    }

    const data = await response.json()
    const games = data.response.games

    if (!games || games.length === 0) return null

    // Pegamos o primeiro jogo da lista (o mais jogado recentemente)
    const lastGame = games[0]

    return {
      name: lastGame.name,
      playtime: lastGame.playtime_forever, // Tempo total jogado em minutos
      lastPlayed: new Date().toISOString(), // A API não fornece timestamp exato
      imageUrl: `https://cdn.akamai.steamstatic.com/steam/apps/${lastGame.appid}/header.jpg`,
      appId: lastGame.appid,
    }
  } catch (error) {
    console.error("Erro ao obter o último jogo jogado:", error)
    return null
  }
}
