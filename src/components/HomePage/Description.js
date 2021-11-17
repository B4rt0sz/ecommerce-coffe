import descriptionHome from '../../../public/images/descriptionHome.jpg'

const homeDescription =
  'The EGO COFFEE was created so that everyone could enjoy the unique depth of taste of delicious coffee - coffee that we want to drink ourselves. We care about the highest quality and freshness of the products delivered to us, because we know that only this is able to provide unique taste qualities. We cherish the value of a well-prepared cup of coffee, so we want you to be able to enjoy it every day at home.'

const Description = () => {
  return (
    <section className='home__description'>
      <img src={descriptionHome} alt='coffee' />
      <p>{homeDescription}</p>
    </section>
  )
}

export default Description
