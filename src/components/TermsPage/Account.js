const Account = () => {
  const accountList = [
    {
      id: 1,
      text: 'To create an Account in the Store, you must complete the Registration Form. It is necessary to provide the following data: name, surname and tax identification number (in the case of entrepreneurs), as well as correspondence address, e-mail address, telephone number.',
    },
    {
      id: 2,
      text: 'The creation of an Account in the Store is free.',
    },
    {
      id: 3,
      text: 'Logging in to the Account is done by entering the login and password set in the Registration Form.',
    },
    {
      id: 4,
      text: 'The Customer may at any time, without giving a reason and without incurring any fees, delete the Account by sending an appropriate request to the Seller, in particular via e-mail or in writing to the addresses provided in § 3.',
    },
  ]

  const account = accountList.map((item) => (
    <li className='termsConditions__account-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
    </li>
  ))

  return (
    <div className='termsConditions__account'>
      <h1>§ 6 Account creation in the Store</h1>
      {account}
    </div>
  )
}

export default Account
