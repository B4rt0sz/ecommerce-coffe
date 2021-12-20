const MerchandiseProductPage = ({ match }) => {
  console.log(match)
  return (
    <section className='coffee'>
      <div>{match.params.id}</div>
    </section>
  )
}

export default MerchandiseProductPage
