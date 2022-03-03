const rulesList = [
  {
    id: 1,
    text: 'In order to place an Order:',
    textA:
      'select the Product that is the subject of the Order, and then click the "Add to Cart" button (or equivalent),',
    textB:
      'log in (optional) or use the option of placing an Order without registration,',
    textC:
      "if the option to place an Order without registration has been chosen - fill in the Order Form by entering the details of the Order recipient and the address to which the Product is to be delivered, select the type of shipment (method of delivery of the Product), enter the invoice data, if different from the recipient's details,",
    textD: 'choose one of the available payment methods,',
    textE: 'click the "Place order" button,',
    textF:
      'depending on the method of payment, pay for the order within a specified period, subject to § 8 point 3.',
  },
  {
    id: 2,
    text: 'Placing an order is associated with a declaration that the Customer has read the terms of purchase and the privacy policy of the Store.',
  },
]

const Rules = () => {
  const rules = rulesList.map((item) => (
    <li className='termsConditions__rules-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
      {item.textA && <p>a. {item.textA}</p>}
      {item.textB && <p>b. {item.textB}</p>}
      {item.textC && <p>c. {item.textC}</p>}
      {item.textD && <p>d. {item.textD}</p>}
      {item.textE && <p>e. {item.textE}</p>}
      {item.textF && <p>f. {item.textF}</p>}
    </li>
  ))

  return (
    <div className='termsConditions__rules'>
      <h1>§ 7 Rules for placing an Order</h1>
      {rules}
    </div>
  )
}

export default Rules
