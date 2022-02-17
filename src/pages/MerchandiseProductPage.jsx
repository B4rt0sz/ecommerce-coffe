import { useEffect } from 'react'
import ProductCarousel from '../components/MerchandiseProductPage/ProductCarousel'
import ProductDescription from '../components/MerchandiseProductPage/ProductDescription'

import dataMerchandise from '../data/data'

const data = dataMerchandise.merchandise

const MerchandiseProductPage = ({ match }) => {
  const id = match.params.id

  useEffect(() => {
    document.title = 'Merchandise | EGO COFFE'
  }, [])

  return (
    <section className='merchandiseProduct'>
      <div className='container'>
        <ProductCarousel data={data} id={id} />
        <ProductDescription data={data} id={id} />
      </div>
    </section>
  )
}

export default MerchandiseProductPage
