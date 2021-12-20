import CoffeeCard from '../components/CoffeePage/CoffeeCard'
import CoffeeSearch from '../components/CoffeePage/CoffeeSearch'

const CoffeePage = ({ match }) => {
  return (
    <section className='coffee'>
      <div className='container'>
        <CoffeeSearch />
        <CoffeeCard match={match} />
      </div>
    </section>
  )
}

export default CoffeePage
