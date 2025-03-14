import { NextRequest, NextResponse } from "next/server"

const CLIENT_ID = "87e7534580c5444d9557d30c0cc8a4cd"
const CLIENT_SECRET = "d051fbba0fc04a17aaff2a1b5d2556db"
const REDIRECT_URI = "http://localhost:3000/api/spotify/callback" // URL para onde o Spotify redirecionará

export async function GET() {
  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=user-read-recently-played&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`

  return NextResponse.redirect(authUrl)
}
