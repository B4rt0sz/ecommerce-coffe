const definitionsList = [
  {
    id: 1,
    text: 'Consumer - a natural person concluding a contract with the Seller as part of the Store, the subject of which is not directly related to its business or professional activity.',
  },
  {
    id: 2,
    text: 'Seller - a natural person running a business under the name of Arkadiusz Majowiec EGO COFFEE entered into the Central Register and Information on Economic Activity (CEIDG) kept by the minister responsible for economy, NIP 8943136740, REGON 382286925.',
  },
  {
    id: 3,
    text: 'Customer - any entity making purchases through the Store.',
  },
  {
    id: 4,
    text: 'Entrepreneur - a natural person, a legal person and an organizational unit that is not a legal person, which grants legal capacity by the separate law, performing on its own behalf an economic activity that uses the Store.',
  },
  {
    id: 5,
    text: 'Store - an online store run by the Seller at the Internet address www.egocoffee.pl/store.',
  },
  {
    id: 6,
    text: 'Distance contract - contract concluded with the Customer as part of an organized system of concluding distance contracts (as part of the Store), without the simultaneous physical presence of the parties, with the sole use of one or more means of distance communication up to and including the conclusion of the contract.',
  },
  {
    id: 7,
    text: 'Regulations - these Store regulations.',
  },
  {
    id: 8,
    text: "Order - the Customer's declaration of will submitted via the Order Form and aimed directly at concluding the Product Sales Agreement or Products with the Seller.",
  },
  {
    id: 9,
    text: 'Account - customer account in the Store, it contains data provided by the customer and information about orders placed by him in the store.',
  },
  {
    id: 10,
    text: 'Registration form - a form available in the Store that allows you to create an Account.',
  },
  {
    id: 11,
    text: 'Order form - an interactive form available in the Store that allows you to place an Order, in particular by adding Products to the Cart and defining the terms of the Sales Agreement, including the method of delivery and payment.',
  },
  {
    id: 12,
    text: "Cart - an element of the Store's software, in which the Products selected for purchase are visible, and it is also possible to determine and modify the Order data, in particular the quantity of products.",
  },
  {
    id: 13,
    text: 'Product - a movable item/service available in the Store which is the subject of the Sales Agreement between the Customer and the Seller.',
  },
  {
    id: 14,
    text: 'Sales Agreement - a Product sales contract concluded between the Customer and the Seller via the Online Store. The Sales Agreement also means - according to the features of the Product - a contract for the provision of services and a contract for specific work.',
  },
]

const Definitions = () => {
  const definitions = definitionsList.map((item) => (
    <li className='termsConditions__definitions-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
    </li>
  ))

  return (
    <div className='termsConditions__definitions'>
      <h1>§ 2 Definitions</h1>
      {definitions}
    </div>
  )
}

export default Definitions
