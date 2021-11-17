const Contract = () => {
  const contractList = [
    {
      id: 1,
      text: 'The conclusion of the Sales Agreement between the Customer and the Seller takes place after the Customer has placed an Order using the Order Form in the Online Store in accordance with § 7 of the Regulations.',
    },
    {
      id: 2,
      text: "After placing the Order, the Seller immediately confirms its receipt and at the same time accepts the Order for execution. Confirmation of receipt of the Order and its acceptance for implementation takes place by sending the Customer an appropriate e-mail to the Customer's e-mail address provided when placing the Order. Upon receipt of the above e-mail by the Customer, a Sales Agreement is concluded between the Customer and the Seller.",
    },
    {
      id: 3,
      text: 'If the Customer chooses:',
      textA:
        "PayU payment or direct transfer to the Seller's bank account, the Customer is obliged to make the payment within 7 calendar days from the date of the Sale Agreement - otherwise the order will be canceled.",
    },
    {
      id: 4,
      text: 'The product will be shipped by the Seller within five working days, in the manner chosen by the Customer when placing the Order, unless the order completion date is changed by appropriate information on the www.egocoffee.pl website or its subpages.',
    },
    {
      id: 5,
      text: 'The start of the period for delivery of the Product to the Customer is counted as follows:',
      textA:
        "if the Customer selects PayU payment or a direct transfer to the Seller's bank account - from the date of crediting the Seller's bank account.",
    },
    {
      id: 6,
      text: 'Product delivery takes place in Poland.',
    },
    {
      id: 7,
      text: `The delivery of the Product to the Customer is payable, unless the Sales Agreement provides otherwise. Product delivery costs (including charges for transport, delivery and postal services) are indicated to the Customer on the Online Store's website in the "Cost and delivery time" tab and when placing the Order, including when the Customer expresses his will to be bound by the Sales Agreement.`,
    },
  ]

  const contract = contractList.map((item) => (
    <li className='termsConditions__contract-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
      {item.textA && <p>a. {item.textA}</p>}
    </li>
  ))

  return (
    <div className='termsConditions__contract'>
      <h1>§ 9 Fulfillment of a sales contract</h1>
      {contract}
    </div>
  )
}

export default Contract
