import Coffee from '../components/ShopPage/Coffee'
import Merchandise from '../components/ShopPage/Merchandise'

const ShopPage = () => {
  return (
    <section className='shop'>
      <div className='container'>
        <div className='shop__title'>Choose your product</div>
        <div className='shop__container'>
          <Coffee />
          <Merchandise />
        </div>
      </div>
    </section>
  )
}

export default ShopPage
