import NumberFormat from 'react-number-format'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../store/slices/cartSlice'

const CartSubtotal = ({ quantity, price }) => {
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <section className='cart__subtotal'>
      <button className='cart__subtotal-clearCart' onClick={handleClearCart}>
        Remove all Items
      </button>
      <div className='cart__subtotal-summary'>
        <NumberFormat
          displayType={'text'}
          thousandSeparator={true}
          decimalSeparator='.'
          decimalScale={2}
          prefix={'$'}
          value={price}
          renderText={(value) => (
            <p>
              Subtotal ({quantity} items):
              <strong>{` ${value}`}</strong>
            </p>
          )}
        />
        <button className='cart__subtotal-summary-btn'>
          Proceed to Checkout
        </button>
      </div>
    </section>
  )
}

export default CartSubtotal
