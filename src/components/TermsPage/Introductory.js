const introductoryList = [
  {
    id: 1,
    text: 'The EGO COFFEE online store, available at www.coffeego.netlify.com/store, is run by Arkadiusz Majowiec running a business under the name Arkadiusz Majowiec EGO COFFEE entered into the Central Register and Information on Economic Activity (CEIDG) kept by the minister responsible for of the economy, NIP: 8943136740, REGON: 382286925.',
  },
  {
    id: 2,
    text: 'These Regulations are addressed to both Consumers and Entrepreneurs using the Store and define the rules of using the Online Store as well as the rules and procedure for concluding Sales Agreements with the Customer at a distance via the Store.',
  },
]

const Introductory = () => {
  const introductory = introductoryList.map((item) => (
    <li className='termsConditions__introductory-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
    </li>
  ))

  return (
    <div className='termsConditions__introductory'>
      <h1>§ 1 Introductory provisions</h1>
      {introductory}
    </div>
  )
}

export default Introductory
