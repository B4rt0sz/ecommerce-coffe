import Info from '../components/SubscriptionPage/Info'
import Points from '../components/SubscriptionPage/Points'
import Plan from '../components/SubscriptionPage/Plan'
import { useEffect } from 'react'

const SubscriptionPage = () => {
  useEffect(() => {
    document.title = 'Subscription | EGO COFFE'
  }, [])

  return (
    <section className='subscription'>
      <div className='container'>
        <h1 className='subscription__title'>Subscription</h1>
        <Info />
        <Points />
        <Plan />
      </div>
    </section>
  )
}

export default SubscriptionPage
