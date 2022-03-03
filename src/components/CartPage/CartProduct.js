import { useDispatch } from 'react-redux'
import {
  removeFromCart,
  decreaseCart,
  addToCart,
} from '../../store/slices/cartSlice'

const CartProduct = ({
  title,
  category,
  image,
  size,
  quantity,
  purchaseType,
  subscription,
  price,
  item,
}) => {
  const dispatch = useDispatch()
  const product = item
  const itemPurchaseType =
    category === 'merchandise'
      ? purchaseType
      : category === 'coffee' && purchaseType === 'one-time'
      ? purchaseType
      : `${purchaseType} | ${subscription} months`

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product))
  }

  const handleDecreaseQuantity = () => {
    dispatch(decreaseCart(product))
  }

  const handleIncreaseQuantity = () => {
    dispatch(addToCart(product))
  }

  return (
    <section className='cart__products'>
      <div className='cart__products-item'>
        <img src={image} alt='product' />
        <div className='cart__products-item-container'>
          <h3>{title}</h3>
          <p>{size ? `${size}g` : null}</p>
          <p>{itemPurchaseType}</p>
          <button onClick={handleRemoveFromCart}>Remove</button>
        </div>
      </div>
      <div className='cart__products-price'>${price}</div>
      <div className='cart__products-quantity'>
        <button onClick={handleDecreaseQuantity}>-</button>
        <div className='cart__products-quantity-count'>{quantity}</div>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <div className='cart__products-total-price'>${price * quantity}</div>
    </section>
  )
}

export default CartProduct
