import Info from '../components/SubscriptionPage/Info'
import Points from '../components/SubscriptionPage/Points'
import Plan from '../components/SubscriptionPage/Plan'

const SubscriptionPage = () => {
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
