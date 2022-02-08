import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import LoadingScreen from './layouts/LoadingScreen'
import Header from './layouts/Header'
import Router from './routes/Router'
import Footer from './layouts/Footer'
import ScrollToTopButton from './components/App/ScrollToTopButton'

import { freeShipping, getTotals, selectItems } from './store/slices/cartSlice'
import { setUser } from './store/slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

function App() {
  const [loading, setLoading] = useState(true)

  const items = useSelector(selectItems)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(true))
      } else {
        dispatch(setUser(false))
      }
    })
  }, [])

  useEffect(() => {
    dispatch(getTotals())
    dispatch(freeShipping())
  }, [items])

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
      <ToastContainer />
    </div>
  )
}

export default App
