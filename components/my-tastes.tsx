"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Music, Gamepad2, ExternalLink, Clock, Heart } from "lucide-react"
import { getLastPlayedTrack } from "@/lib/spotify"
import { getLastPlayedGame, type SteamGame } from "@/lib/steam"

interface Track {
  name: string
  artist: string
  album: string
  albumArt: string
  url: string
}

export default function MyTastes() {
  const [track, setTrack] = useState<Track>({
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    albumArt: "/placeholder.svg?height=300&width=300",
    url: "https://open.spotify.com",
  })

  const [game, setGame] = useState<SteamGame>({
    name: "Cyberpunk 2077",
    playtime: 1240,
    lastPlayed: "2023-03-10T18:25:43.511Z",
    imageUrl: "/placeholder.svg?height=300&width=300",
    appId: 1091500,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    async function fetchData() {
      try {
        const [trackData, gameData] = await Promise.all([
          getLastPlayedTrack(),
          getLastPlayedGame(),
        ])

        if (mounted) {
          if (trackData) setTrack(trackData)
          if (gameData) setGame(gameData)
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    fetchData()

    return () => {
      mounted = false
    }
  }, [])

  // Formatando tempo de jogo para horas e minutos
  const formatPlaytime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  const formatLastPlayed = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Yesterday"
    if (diffDays < 7) return `${diffDays} days ago`
    return date.toLocaleDateString()
  }

  if (loading) {
    return (
      <div className="py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <motion.section
      className="py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-400"
        initial={{ y: -30 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", stiffness: 70 }}
        viewport={{ once: true }}
      >
        <Heart className="inline-block w-8 h-8 mr-2 text-orange-400" />
        What I'm Into Now
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {/* Spotify Card */}
        <motion.div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/20">
          <div className="p-4 md:p-6">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                <Music className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">
              Last Played on Spotify
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center">
              <div className="relative w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 mb-4 sm:mb-0">
                <img
                  src={track.albumArt}
                  alt={track.album}
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>

              <div className="sm:ml-4 md:ml-6 text-center sm:text-left">
                <h4 className="text-base md:text-lg font-bold text-white mb-1">
                  {track.name}
                </h4>
                <p className="text-white/80 mb-2 text-sm md:text-base">
                  {track.artist}
                </p>
                <p className="text-white/60 text-xs md:text-sm mb-3 md:mb-4">
                  Album: {track.album}
                </p>

                <a
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 md:gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-2 md:py-1.5 md:px-3 rounded-full transition-colors text-xs md:text-sm"
                >
                  <span>Listen on Spotify</span>
                  <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steam Card */}
        <motion.div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/20">
          <div className="p-4 md:p-6">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                <Gamepad2 className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">
                Last Played on Steam
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center">
              <div className="relative w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 mb-4 sm:mb-0 overflow-hidden rounded-lg">
                <img src={game.imageUrl} alt={game.name} className="w-full h-full object-cover" />
              </div>

              <div className="sm:ml-4 md:ml-6 text-center sm:text-left">
                <h4 className="text-base md:text-lg font-bold text-white mb-1">
                  {game.name}
                </h4>

                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 text-blue-400 mr-1.5" />
                  <p className="text-white/80 text-xs md:text-sm">
                    {formatPlaytime(game.playtime)} total playtime
                  </p>
                </div>

                <p className="text-white/60 text-xs md:text-sm mb-3 md:mb-4">
                  Last played: {formatLastPlayed(game.lastPlayed)}
                </p>

                <a
                  href={`https://store.steampowered.com/app/${game.appId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 md:gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-2 md:py-1.5 md:px-3 rounded-full transition-colors text-xs md:text-sm"
                >
                  <span>View on Steam</span>
                  <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
