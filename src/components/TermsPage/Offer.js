const Offer = () => {
  const offerList = [
    {
      id: 1,
      text: 'The Customer may use the following methods of delivery or collection of the ordered Product:',
      textA: 'courier service.',
    },
    {
      id: 2,
      text: 'The customer can use the following payment methods:',
      textA: 'PayU payments,',
      textB: "direct transfer to the Seller's bank account.",
    },
    {
      id: 3,
      text: "Detailed information on delivery methods and acceptable payment methods can be found on the Store's website.",
    },
  ]

  const offer = offerList.map((item) => (
    <li className='termsConditions__offer-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
      {item.textA && <p>a. {item.textA}</p>}
      {item.textB && <p>b. {item.textB}</p>}
    </li>
  ))

  return (
    <div className='termsConditions__offer'>
      <h1>§ 8 The offered methods of delivery and payment</h1>
      {offer}
    </div>
  )
}

export default Offer
