const withdrawalList = [
  {
    id: 1,
    text: 'The consumer may withdraw from the Sales Agreement within 14 days without giving any reason.',
  },
  {
    id: 2,
    text: 'The running of the time limit specified in paragraph 1 begins from the day the Product is delivered to the Consumer or a person other than the carrier designated by him.',
  },
  {
    id: 3,
    text: 'In the case of an Agreement that includes many Products that are delivered separately, in batches or in parts, the date specified in paragraph 1 runs from the delivery of the last item, batch or part.',
  },
  {
    id: 4,
    text: 'In the case of an Agreement which consists in the regular delivery of Products for a specified period (subscription), the date specified in paragraph 1 runs from taking possession of the first thing.',
  },
  {
    id: 5,
    text: 'The consumer may withdraw from the Agreement by submitting to the Seller a declaration of withdrawal from the Agreement. To meet the deadline for withdrawing from the Agreement, it is enough for the Consumer to send a statement before the expiry of this period.',
  },
  {
    id: 6,
    text: "The statement may be sent by traditional mail or by e-mail by sending the statement to the Seller's e-mail address - the Seller's contact details are specified in § 3. The statement may also be submitted on the form, a model of which is attached to the Act of May 30, 2014 year on consumer rights, but it is not obligatory.",
  },
  {
    id: 7,
    text: 'If the Consumer sends the declaration by e-mail, the Seller shall immediately send the Consumer to the e-mail address provided by the Consumer confirmation of receipt of the declaration of withdrawal from the Agreement.',
  },
  {
    id: 8,
    text: 'Consequences of withdrawal from the Agreement:',
    textA:
      'in the event of withdrawal from a Distance Agreement, the Agreement shall be considered void,',
    textB:
      "in the event of withdrawal from the Agreement, the Seller shall immediately return to the Consumer, not later than within 14 days from the date of receipt of the Consumer's statement on withdrawal from the Agreement, all payments made by him, including the costs of delivering the goods, except for additional costs",
  },
  {
    id: 9,
    text: 'The reimbursement will be made by the Seller using the same payment methods that were used by the Consumer in the original transaction, unless the Consumer has expressly agreed to a different solution that will not involve any costs for him.',
  },
  {
    id: 10,
    text: 'The Seller may withhold the reimbursement until the Product is received back or until proof of its return is provided to him, whichever occurs first.',
  },
  {
    id: 11,
    text: "The consumer should return the Product to the Seller's address provided in these Regulations immediately, no later than 14 days from the day on which he informed the Seller about the withdrawal from the Agreement. The deadline will be met if the Consumer sends the Product back within 14 days.",
  },
  {
    id: 12,
    text: 'The consumer bears the direct costs of returning the Product, including the costs of returning the Product, if, due to its nature, the Product could not be returned by regular mail.',
  },
  {
    id: 13,
    text: 'The consumer is only responsible for the reduction in the value of the Product resulting from using it in a different way than was necessary to establish the nature, characteristics and functioning of the Product.',
  },
  {
    id: 14,
    text: 'If, due to the nature of the Product, it cannot be returned by regular mail, information about this, as well as about the costs of returning the Product, will be included in the Product description in the Store.',
  },
  {
    id: 15,
    text: 'The right to withdraw from a distance contract is not entitled to the Consumer in relation to the Agreement:',
    textA:
      "in which the subject of the service is a non-prefabricated item, manufactured according to the Consumer's specification or serving to satisfy his individual needs,",
    textB:
      'in which the subject of the service is an item delivered in a sealed package, which cannot be returned after opening the package due to health protection or hygiene reasons, if the packaging has been opened after delivery,',
    textC:
      'in which the subject of the service is an item that deteriorates quickly or has a short use-by date.',
  },
]

const Withdrawal = () => {
  const withdrawal = withdrawalList.map((item) => (
    <li className='termsConditions__withdrawal-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
      {item.textA && <p>a. {item.textA}</p>}
      {item.textB && <p>b. {item.textB}</p>}
      {item.textC && <p>b. {item.textC}</p>}
    </li>
  ))

  return (
    <div className='termsConditions__withdrawal'>
      <h1>§ 10 The right to withdraw from the contract</h1>
      {withdrawal}
    </div>
  )
}

export default Withdrawal
