import { useIsMobile } from '../../hooks/useMediaQuery'

import subscriptionHome from '../../../public/images/subscriptionHome.jpg'

const Subscription = () => {
  const isMobile = useIsMobile()

  const homeSubscription =
    "We offer a single-purchase or subscription option that automatically delivers your coffee to you. As a subscription member, we reserve coffee in each batch, specifically for you. Simply set your frequency, and we'll handle the rest."

  const mobileSubscription = (
    <>
      <img src={subscriptionHome} alt='coffee' />
      <p>{homeSubscription}</p>
    </>
  )

  const desctopSubscription = (
    <>
      <p>{homeSubscription}</p>
      <img src={subscriptionHome} alt='coffee' />
    </>
  )

  return (
    <section className='home__subscription'>
      {isMobile ? mobileSubscription : desctopSubscription}
    </section>
  )
}

export default Subscription
