import Coffee from '../components/ShopPage/Coffee'
import Merchandise from '../components/ShopPage/Merchandise'
import { useEffect } from 'react'

const ShopPage = ({ match }) => {
  const url = match.url

  useEffect(() => {
    document.title = 'Shop | EGO COFFE'
  }, [])

  return (
    <section className='shop'>
      <div className='container'>
        <div className='shop__title'>Choose your product</div>
        <div className='shop__container'>
          <Coffee url={url} />
          <Merchandise url={url} />
        </div>
      </div>
    </section>
  )
}

export default ShopPage
