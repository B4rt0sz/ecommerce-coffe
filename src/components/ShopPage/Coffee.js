import { Link } from 'react-router-dom'
import coffeeIMG from '../../../public/images/shopCoffee.jpg'

const Coffee = () => {
  return (
    <div className='shop__coffee'>
      <Link to='/products/coffee'>
        <img
          className='shop__coffee-img'
          src={coffeeIMG}
          alt='coffee'
          loading='lazy'
        />
        <h2 className='shop__coffee-title'>Coffe</h2>
      </Link>
    </div>
  )
}

export default Coffee
