const informationsList = [
  {
    id: 1,
    text: "The Seller, to the fullest extent permitted by law, shall not be liable for any disruptions, including interruptions in the functioning of the Store, caused by force majeure, unlawful actions of third parties or incompatibility of the Online Store with the Customer's technical infrastructure.",
  },
  {
    id: 2,
    text: "Viewing the Store's assortment does not require creating an Account. Placing orders by the Customer for Products in the Store's assortment is possible either after creating an Account in accordance with the provisions of § 6 of the Regulations or by providing the necessary personal and address data enabling the Order to be completed without creating an Account.",
  },
  {
    id: 3,
    text: 'The prices given in the Store are given in Polish zlotys and are gross prices (including VAT).',
  },
  {
    id: 4,
    text: "The final (final) amount to be paid by the Customer consists of the price for the Product and the cost of delivery (including charges for transport, delivery and postal services), about which the Customer is informed on the Store's website when placing the Order, including the moment of expressing the will to be bound by the Sales Agreement.",
  },
  {
    id: 5,
    text: 'In the case of an Agreement covering a subscription or provision of services for an indefinite period, the final (final) price is the total price including all payments for the settlement period.',
  },
  {
    id: 6,
    text: 'When the nature of the subject of the Agreement does not allow, judging reasonably, to calculate the final (final) price in advance, information on the manner in which the price will be calculated, as well as charges for transport, delivery, postal services and other costs will be given in the Store in the Product description.',
  },
]

const Informations = () => {
  const informations = informationsList.map((item) => (
    <li className='termsConditions__informations-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
    </li>
  ))

  return (
    <div className='termsConditions__informations'>
      <h1>§ 5 General information</h1>
      {informations}
    </div>
  )
}

export default Informations
