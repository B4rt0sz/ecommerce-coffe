const contactList = [
  {
    id: 1,
    text: "Seller's address: ul. Marii Skłodowskiej-Curie 8B, 56-400 Oleśnica.",
  },
  {
    id: 2,
    text: "The Seller's e-mail address: twoje@egocoffee.pl.",
  },
  {
    id: 3,
    text: "Seller's telephone number: +48 793 471 203.",
  },
  {
    id: 4,
    text: "The Seller's bank account number: 30 1050 1575 1000 0097 0935 5243.",
  },
  {
    id: 5,
    text: 'The Customer may communicate with the Seller using the addresses and telephone numbers provided in this paragraph.',
  },
  {
    id: 6,
    text: 'The Customer may communicate by phone with the Seller between 10.00-20.00.',
  },
]

const Contact = () => {
  const contact = contactList.map((item) => (
    <li className='termsConditions__contact-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
    </li>
  ))

  return (
    <div className='termsConditions__contact'>
      <h1>§ 3 Contact with the Store</h1>
      {contact}
    </div>
  )
}

export default Contact
