import { useState, useEffect } from 'react'

import LoadingScreen from './layouts/LoadingScreen'
import Header from './layouts/Header'
import Router from './routes/Router'
import Footer from './layouts/Footer'
import ScrollToTopButton from './components/App/ScrollToTopButton'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className='wrapper'>
      <Header />
      <Router />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App
