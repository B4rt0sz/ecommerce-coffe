import { useState, useEffect } from 'react'

import LoadingScreen from './layouts/LoadingScreen'
import Header from './layouts/Header'
import Page from './layouts/Page'
import Footer from './layouts/Footer'
import ScrollToTopButton from './components/App/ScrollToTopButton'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className='wrapper'>
          <Header />
          <Page />
          <Footer />
          <ScrollToTopButton />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default App
