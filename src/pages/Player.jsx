import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Player = () => {
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (!token) return

    const fetchPlaylists = async () => {
      let allItems = []
      let offset = 0
      const limit = 50
      let hasMore = true

      while (hasMore) {
        const res = await axios.get(`https://api.spotify.com/v1/me/playlists?limit=${limit}&offset=${offset}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        allItems = [...allItems, ...res.data.items]
        offset += limit
        hasMore = res.data.items.length === limit
      }

      setPlaylists(allItems)
    }

    fetchPlaylists()
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h2>Suas Playlists</h2>
      <ul>
        {playlists.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Player