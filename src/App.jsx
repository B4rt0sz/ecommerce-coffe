import { useState, useEffect } from 'react'

import LoadingScreen from './layouts/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className='wrapper'>Strona</div>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default App
