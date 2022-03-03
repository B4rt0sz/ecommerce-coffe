const complaintList = [
  {
    id: 1,
    text: 'The Sales Agreement covers new Products.',
  },
  {
    id: 2,
    text: 'In the event of a defect in the goods purchased from the Seller, the Customer has the right to make a complaint based on the provisions on the warranty in the Civil Code. If the Client is an Entrepreneur, the parties exclude liability under the warranty.',
  },
  {
    id: 3,
    text: 'Complaints should be submitted in writing or electronically to the addresses of the Seller provided in these Regulations.',
  },
  {
    id: 4,
    text: "It is recommended to include in the complaint a brief description of the defect, the circumstances (including the date) of its occurrence, data of the Customer submitting the complaint, and the Customer's request in connection with the defect of the goods.",
  },
  {
    id: 5,
    text: "The Seller will respond to the complaint immediately, and if the Customer is a Consumer - no later than within 14 days. If the Customer is a Consumer and the Seller does not respond to the complaint within 14 days, it is considered that the Customer's request was considered justified.",
  },
  {
    id: 6,
    text: 'Goods returned as part of the complaint procedure should be sent to the address given in § 3 of these Regulations.',
  },
]

const Complaint = () => {
  const complaint = complaintList.map((item) => (
    <li className='termsConditions__complaint-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
    </li>
  ))

  return (
    <div className='termsConditions__complaint'>
      <h1>§ 11 Complaint</h1>
      {complaint}
    </div>
  )
}

export default Complaint
