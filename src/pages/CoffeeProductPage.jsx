import ProductCarousel from '../components/CoffeeProductPage/ProductCarousel'
import ProductDescription from '../components/CoffeeProductPage/ProductDescription'

import dataCoffee from '../data/data'

const data = dataCoffee.coffee

const CoffeeProductPage = ({ match }) => {
  const id = match.params.id

  return (
    <section className='coffeeProduct'>
      <div className='container'>
        <ProductCarousel data={data} id={id} />
        <ProductDescription data={data} id={id} />
      </div>
    </section>
  )
}

export default CoffeeProductPage
