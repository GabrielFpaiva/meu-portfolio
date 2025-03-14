const CLIENT_ID = "87e7534580c5444d9557d30c0cc8a4cd"
const CLIENT_SECRET = "d051fbba0fc04a17aaff2a1b5d2556db"

// Armazenamento temporário dos tokens (idealmente use um banco de dados)
let storedAccessToken = ""
let storedRefreshToken = "AQAUAv0VJgy-u0Xb62sOFVz3pmn6t7wOAxyZQnVafRJBumCFlpQBseoytAVz_qKqNwSmR64-Q7E9IJpMjbfXLHmX38S2hIacSgJ7AhpSlpOFFRA58lhsEA1OoUTYtww_C2g" // Copie o refresh_token que você recebeu

async function refreshSpotifyToken(): Promise<string | null> {
  if (!storedRefreshToken) {
    console.error("Nenhum refresh token disponível.")
    return null
  }

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: storedRefreshToken,
      }).toString(),
    })

    if (!response.ok) {
      throw new Error("Erro ao renovar o token do Spotify")
    }

    const data = await response.json()
    storedAccessToken = data.access_token // Atualiza o access token

    return storedAccessToken
  } catch (error) {
    console.error("Erro ao renovar token do Spotify:", error)
    return null
  }
}

export async function getSpotifyAccessToken(): Promise<string | null> {
  if (!storedAccessToken) {
    return await refreshSpotifyToken()
  }
  return storedAccessToken
}

export interface Track {
  name: string
  artist: string
  album: string
  albumArt: string
  url: string
}

export async function getLastPlayedTrack(): Promise<Track | null> {
  const accessToken = await getSpotifyAccessToken()
  if (!accessToken) return null

  try {
    const response = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) throw new Error("Erro ao obter a última música tocada")

    const data = await response.json()
    const lastTrack = data.items[0]?.track

    if (!lastTrack) return null

    return {
      name: lastTrack.name,
      artist: lastTrack.artists.map((artist: any) => artist.name).join(", "),
      album: lastTrack.album.name,
      albumArt: lastTrack.album.images[0]?.url || "/placeholder.svg",
      url: lastTrack.external_urls.spotify,
    }
  } catch (error) {
    console.error("Erro ao obter a última música escutada:", error)
    return null
  }
}

