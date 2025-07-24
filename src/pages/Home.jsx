import React from 'react'

const Home = () => {
  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI
  const SCOPE = 'playlist-read-private playlist-modify-private playlist-modify-public'
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${encodeURIComponent(SCOPE)}`

  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>Spotify Shuffler</h1>
      <a href={AUTH_URL}>
        <button style={{ fontSize: '18px', padding: '10px 20px' }}>Login with Spotify</button>
      </a>
    </div>
  )
}

export default Home