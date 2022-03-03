const Subscription = () => {
  const homeSubscription =
    "We offer a single-purchase or subscription option that automatically delivers your coffee to you. As a subscription member, we reserve coffee in each batch, specifically for you. Simply set your frequency, and we'll handle the rest."

  return (
    <section className='home__subscription'>
      <img src='/images/subscriptionHome.jpg' alt='coffee' loading='lazy' />
      <p>{homeSubscription}</p>
    </section>
  )
}

export default Subscription
