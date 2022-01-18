import { Link } from 'react-router-dom'
import dataMerchandise from '../../data/data'

const merchandise = dataMerchandise.merchandise

const MerchandiseCard = ({ match }) => {
  const list = merchandise.map((product) => (
    <li className='merchandise__product-list-item' key={product._id}>
      <Link to={`${match.url}/${product.url}`}>
        <img
          className='merchandise__product-list-item-img'
          src={product.images[0]}
          alt={product.url}
        />
        <div className='merchandise__product-list-item-container'>
          <h2 className='merchandise__product-list-item-title'>
            {product.title}
          </h2>
          <p className='merchandise__product-list-item-price'>
            ${product.price}
          </p>
          <button className='merchandise__product-list-item-btn'>
            View more
          </button>
        </div>
      </Link>
    </li>
  ))

  return (
    <div className='merchandise__product'>
      <ul className='merchandise__product-list'>{list}</ul>
    </div>
  )
}

export default MerchandiseCard
