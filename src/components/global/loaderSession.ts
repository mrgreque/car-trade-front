import axios from "axios"

export const LoaderSession = async () => {
  const results = await axios.get('http://localhost:3000/validate', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token') as string}`
    }
  })

  return { autenticated: results.status === 204 }
}
