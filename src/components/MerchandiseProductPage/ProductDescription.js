import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/slices/cartSlice'

const ProductDescription = ({ data, id }) => {
  const dispatch = useDispatch()

  const merchandiseData = data.find((merchandise) => merchandise.url === id)

  const description = merchandiseData.description.map((info, index) => (
    <li key={index}>{info}</li>
  ))

  const descriptionInfo = <ul>{description}</ul>

  const handleAddToCart = () => {
    const product = {
      id: merchandiseData._id,
      title: merchandiseData.title,
      category: merchandiseData.category,
      image: merchandiseData.images[0],
      size: false,
      purchaseType: 'one-time',
      subscription: false,
      freeShipping: false,
      price: merchandiseData.price,
    }

    dispatch(addToCart(product))
  }

  return (
    <div className='merchandiseProduct__description'>
      <h1 className='merchandiseProduct__description-title'>
        {merchandiseData.title}
      </h1>

      <h3 className='merchandiseProduct__description-price'>{`$${merchandiseData.price}`}</h3>

      <div className='merchandiseProduct__description-info'>
        {descriptionInfo}
      </div>

      <button
        className='merchandiseProduct__description-btn'
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDescription
