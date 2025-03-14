"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Music, ExternalLink } from "lucide-react"
import { getLastPlayedTrack } from "@/lib/spotify"

interface Track {
  name: string
  artist: string
  album: string
  albumArt: string
  url: string
}

export default function SpotifyTrack() {
  const [track, setTrack] = useState<Track | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLastTrack() {
      try {
        const trackData = await getLastPlayedTrack()
        setTrack(trackData)
      } catch (error) {
        console.error("Error fetching Spotify track:", error)
        // Fallback data for demo purposes
        setTrack({
          name: "Blinding Lights",
          artist: "The Weeknd",
          album: "After Hours",
          albumArt: "/placeholder.svg?height=300&width=300",
          url: "https://open.spotify.com",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchLastTrack()
  }, [])

  if (loading) {
    return (
      <div className="py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!track) {
    return null
  }

  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500"
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        Last Played on Spotify
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/20"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row">
            <motion.div
              className="relative w-full md:w-1/3 aspect-square"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <img
                    src={track.albumArt || "/placeholder.svg"}
                    alt={`${track.album} by ${track.artist}`}
                    className="w-full h-full object-cover rounded-full shadow-lg"
                  />
                </motion.div>
              </div>
            </motion.div>

            <div className="p-6 md:p-8 w-full md:w-2/3 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Music className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">Now Playing</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{track.name}</h3>
              <p className="text-lg md:text-xl text-white/80 mb-4">{track.artist}</p>
              <p className="text-white/60 mb-6 text-sm md:text-base">Album: {track.album}</p>

              <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-1.5 px-3 md:py-2 md:px-4 rounded-full transition-colors self-start text-sm md:text-base"
              >
                <span>Listen on Spotify</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

