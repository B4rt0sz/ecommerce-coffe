const subscriptionInfo =
  'Restocking your favourite coffee every month is a discomfort you never have to worry about again. Any coffee you fancy in our product line can be subscribed for a period of either 3, 6, 12 or 24 months.'

const Info = () => {
  return (
    <section className='subscription__info'>
      <img src='/images/subscriptionIMG.jpg' alt='coffee' loading='lazy' />
      <p>{subscriptionInfo}</p>
    </section>
  )
}

export default Info
