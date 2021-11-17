const General = () => {
  const generalList = [
    {
      id: 1,
      text: 'This Privacy Policy sets out the rules for the processing and protection of personal data provided by Users in connection with their use of services provided through the EGO COFFEE website.',
    },
    {
      id: 2,
      text: "The administrator of Customers' personal data collected via the Online Store is Arkadiusz Majowiec EGO COFFEE ul. Marii Skłodowskiej Curie 8B registered in CEiDG under the NIP number: 8943136740.",
    },
    {
      id: 3,
      text: 'In the interest of the security of the data entrusted to us, we have developed internal procedures and recommendations to prevent disclosure of data to unauthorized persons. We control their performance and constantly check their compliance with the relevant legal acts - the Act on the protection of personal data, the Act on the provision of electronic services, as well as all types of executive acts and Community legislation.',
    },
    {
      id: 4,
      text: "Personal data is processed on the basis of the consent expressed by the User and in cases where the law authorizes the Administrator to process personal data on the basis of legal provisions or to implement the contract concluded between the parties. Customers' personal data collected by the administrator via the Online Store is collected in order to implement the Sales Agreement, and if the Customer agrees - also for marketing purposes.",
    },
    {
      id: 5,
      text: 'The website obtains information about users and their behavior in the following way:',
      textA: 'through information entered voluntarily in forms,',
      textB:
        'by collecting "cookies" in accordance with the provisions of § 2 of this Privacy Policy.',
    },
    {
      id: 6,
      text: 'The recipients of the personal data of the Customers of the Online Store may be:',
      textA:
        "in the case of a Customer who uses the Online Store with the method of delivery by courier, the Administrator provides the Customer's collected personal data to the selected carrier or intermediary performing the shipment at the request of the Administrator,",
      textB:
        "in the case of a Customer who uses the PayU payment method in the Online Store, the Administrator provides the Customer's collected personal data to the selected entity servicing the above payments in the Online Store.",
    },
    {
      id: 7,
      text: 'The customer has the right to access their data and correct them.',
    },
    {
      id: 8,
      text: 'Providing personal data is voluntary, but failure to provide the personal data indicated in the Regulations necessary to conclude a Sales Agreement results in the inability to conclude this contract.',
    },
    {
      id: 9,
      text: 'Personal data left on the website will not be sold or made available to third parties, in accordance with the provisions of the Act on the Protection of Personal Data.',
    },
    {
      id: 10,
      text: 'We reserve the right to change the privacy policy of the website, which may be affected by the development of internet technology, possible changes to the law in the field of personal data protection and the development of our website. We will inform you about any changes in a visible and understandable way.',
    },
    {
      id: 11,
      text: 'Links to other websites may appear on the Website. Such websites operate independently of the Website and are in no way supervised by the website www.egocoffee.pl. These websites may have their own privacy policies and regulations, which we recommend that you read. In case of doubts as to any of the provisions of this privacy policy, we are available - our data can be found in the tab - CONTACT.',
    },
  ]

  const general = generalList.map((item) => (
    <li className='privacy__general-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
      {item.textA && <p>a. {item.textA}</p>}
      {item.textB && <p>b. {item.textB}</p>}
    </li>
  ))

  return (
    <div className='privacy__general'>
      <h1>§ 1 General information</h1>
      {general}
    </div>
  )
}

export default General
