const Final = () => {
  const finalList = [
    {
      id: 1,
      text: 'Agreements concluded through the Online Store are concluded in Polish.',
    },
    {
      id: 2,
      text: 'The Seller reserves the right to amend the Regulations for important reasons, that is: changes in the law, changes in payment and delivery methods - to the extent to which these changes affect the implementation of the provisions of these Regulations. The Seller will inform the Customer about each change at least 7 days in advance.',
    },
    {
      id: 3,
      text: 'In matters not covered by these Regulations, generally applicable provisions of Polish law shall apply, in particular: the Civil Code; the act on the provision of electronic services; the Act on Consumer Rights, the Act on the Protection of Personal Data.',
    },
  ]

  const final = finalList.map((item) => (
    <li className='termsConditions__final-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
    </li>
  ))

  return (
    <div className='termsConditions__final'>
      <h1>§ 13 Final Provisions</h1>
      {final}
    </div>
  )
}

export default Final
