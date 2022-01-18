import { Link } from 'react-router-dom'
import dataCoffee from '../../data/data'

const coffee = dataCoffee.coffee

const CoffeeCard = ({ match }) => {
  const list = coffee.map((product) => (
    <li className='coffee__product-list-item' key={product._id}>
      <Link to={`${match.url}/${product.url}`}>
        <img
          className='coffee__product-list-item-img'
          src={product.images[0]}
          alt={product.url}
        />
        <div className='coffee__product-list-item-container'>
          <h2 className='coffee__product-list-item-title'>{product.title}</h2>
          <p className='coffee__product-list-item-flavor'>{product.flavor}</p>
          <p className='coffee__product-list-item-price'>
            ${product.price250g}
          </p>
          <button className='coffee__product-list-item-btn'>View more</button>
        </div>
      </Link>
    </li>
  ))

  return (
    <div className='coffee__product'>
      <ul className='coffee__product-list'>{list}</ul>
    </div>
  )
}

export default CoffeeCard
