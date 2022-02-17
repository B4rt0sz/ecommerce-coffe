import { useEffect } from 'react'
import ForgotContainer from '../components/ForgotPage/ForgotContainer'
import ForgotTitle from '../components/ForgotPage/ForgotTitle'

const ForgotPage = () => {
  useEffect(() => {
    document.title = 'Forgot | EGO COFFE'
  }, [])

  return (
    <section className='forgot'>
      <div className='container'>
        <ForgotTitle />
        <ForgotContainer />
      </div>
    </section>
  )
}

export default ForgotPage
