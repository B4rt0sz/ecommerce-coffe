const requirementsList = [
  {
    id: 1,
    text: "To use the Store, including browsing the Store's assortment and placing orders for Products, you need:",
    textA:
      'device with access to the Internet and a web browser such as Chrome, Microsoft Edge, Mozilla Firefox, Opera, Safari,',
    textB: 'an active e-mail account,',
    textC: 'cookies support enabled.',
  },
]

const Requirements = () => {
  const requirements = requirementsList.map((item) => (
    <li className='termsConditions__requirements-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
      <p>a. {item.textA}</p>
      <p>b. {item.textB}</p>
      <p>c. {item.textC}</p>
    </li>
  ))

  return (
    <div className='termsConditions__requirements'>
      <h1>§ 4 Technical requirements</h1>
      {requirements}
    </div>
  )
}

export default Requirements
