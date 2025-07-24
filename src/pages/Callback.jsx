import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Callback = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const hash = window.location.hash
    const token = new URLSearchParams(hash.replace('#', '?')).get('access_token')
    if (token) {
      localStorage.setItem('access_token', token)
      navigate('/player')
    }
  }, [navigate])

  return <div>Loading...</div>
}

export default Callback