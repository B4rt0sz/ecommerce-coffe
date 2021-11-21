const Introduction = () => {
  const introductionList = [
    {
      id: 1,
      text: 'The EGO COFFEE was created so that everyone could enjoy the unique depth of taste of delicious coffee - coffee that we want to drink ourselves.',
    },
    {
      id: 2,
      text: 'We care about the highest quality and freshness of the products delivered to us because we know that only this is able to provide unique taste qualities.',
    },
    {
      id: 3,
      text: 'We cherish the value of a well-prepared cup of coffee, so we want you to be able to enjoy it every day at home.',
    },
  ]

  const introductionItem = introductionList.map((item) => (
    <li className='about__introduction-list-item' key={item.id}>
      <p>{item.text}</p>
    </li>
  ))

  return (
    <div className='about__introduction'>
      <ul className='about__introduction-list'>{introductionItem}</ul>
    </div>
  )
}

export default Introduction
