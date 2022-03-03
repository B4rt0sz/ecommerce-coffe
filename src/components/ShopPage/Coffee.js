import { Link } from 'react-router-dom'

const Coffee = ({ url }) => {
  return (
    <div className='shop__coffee'>
      <Link to={`${url}/coffee`}>
        <img
          className='shop__coffee-img'
          src='/images/shopCoffee.jpg'
          alt='coffee'
          loading='lazy'
        />
        <h2 className='shop__coffee-title'>Coffee</h2>
      </Link>
    </div>
  )
}

export default Coffee
