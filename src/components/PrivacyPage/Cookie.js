const Cookie = () => {
  const cookieList = [
    {
      id: 1,
      text: "By using the Store, you accept the Purchase Regulations and the Privacy Policy, as well as consent to the fact that cookies will be placed on the Customer's device. These are small text files that do not contain any personal information of the user, which the Seller uses to provide services and best match them to the customer's needs, as well as for statistical purposes.",
    },
  ]

  const cookie = cookieList.map((item) => (
    <li className='privacy__cookie-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
    </li>
  ))

  return (
    <div className='privacy__cookie'>
      <h1>§ 2 Cookies policy</h1>
      {cookie}
    </div>
  )
}

export default Cookie
