const Info = () => {
  const infoList = [
    { id: 1, text: 'This is us - Zuza and Arek!' },
    { id: 2, text: 'We are responsible for your flavoursome coffee.' },
    { id: 3, text: 'So delicious.' },
    { id: 4, text: 'It is the coffee we want to drink ourselves.' },
    {
      id: 5,
      text: 'We could write here a long story about our coffee adventure but that is not what we are here for.',
    },
    { id: 6, text: 'We are here for coffee flavor!' },
    { id: 7, text: 'Make yourself comfortable in our coffee area.' },
    {
      id: 8,
      text: 'We hope that you will stay with us for a long and tasty time.',
    },
  ]

  const infoItem = infoList.map((item) => (
    <li className='about__info-list-item' key={item.id}>
      <p>{item.text}</p>
    </li>
  ))

  return (
    <div className='about__info'>
      <ul className='about__info-list'>{infoItem}</ul>
    </div>
  )
}

export default Info
