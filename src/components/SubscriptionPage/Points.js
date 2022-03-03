const points = [
  { id: 1, text: 'Choose your favorite Coffee.' },
  { id: 2, text: 'Select a subscription plan.' },
  { id: 3, text: 'Enter your preferred delivery address and date.' },
  { id: 4, text: 'Make the payment.' },
  {
    id: 5,
    text: 'Product will be delivered right to your doorstep.',
  },
  { id: 6, text: 'Enjoy the coffee, and your discount!' },
]

const Points = () => {
  const subscriptionPoints = points.map((item) => (
    <li className='subscription__points-list-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
    </li>
  ))

  return (
    <section className='subscription__points'>
      <h2 className='subscription__points-title'>How does it work?</h2>
      <ul className='subscription__points-list'>{subscriptionPoints}</ul>
    </section>
  )
}

export default Points
