const Plan = () => {
  const subscriptionWhy = {
    title: 'Why should I subscribe?',
    text1:
      'Coffee is a regular product on our cyclic shopping lists. With a subscription, you’ll never have to worry about the unavailability, rise in prices and it’s also one less thing in your shopping bag.',
    text2: 'We do the work for you. And we do it at a much cheaper price.',
  }

  const plans = [
    { id: 1, text: '3-month plan - Free shipping' },
    { id: 2, text: '6-month plan - Pay for only 5 months' },
    { id: 3, text: '12-month plan - Pay for only 10 months' },
    { id: 4, text: '24-month plan - Pay for only 19 months' },
  ]

  const subscriptionPlans = plans.map((item) => (
    <li className='subscription__plan-list-item' key={item.id}>
      <p>{item.text}</p>
    </li>
  ))

  return (
    <section className='subscription__plan'>
      <div className='subscription__plan-info'>
        <h2 className='subscription__plan-info-title'>
          {subscriptionWhy.title}
        </h2>
        <p className='subscription__plan-info-text'>{subscriptionWhy.text1}</p>
        <p className='subscription__plan-info-text'>{subscriptionWhy.text2}</p>
      </div>
      <ul className='subscription__plan-list'>
        <h2 className='subscription__plan-list-title'>Subscription Plans</h2>
        {subscriptionPlans}
      </ul>
    </section>
  )
}

export default Plan
