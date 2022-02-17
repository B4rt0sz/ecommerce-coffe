import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'
import { toast } from 'react-toastify'

import {
  cartAmout,
  clearCart,
  subtotalAmout,
  shippingPrice,
} from '../../store/slices/cartSlice'

const CartSubtotal = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const itemsQuantity = useSelector(cartAmout)
  const itemsPrice = useSelector(subtotalAmout)
  const shippingInfo = useSelector(shippingPrice)

  const handleClearCart = () => {
    dispatch(clearCart())
    toast.error(`Cart cleared!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark',
      style: { fontSize: '16px' },
    })
  }

  const shippingCost = shippingInfo ? 0 : 3
  const totalCost = itemsPrice + shippingCost

  return (
    <section className='cart__subtotal'>
      <button className='cart__subtotal-clearCart' onClick={handleClearCart}>
        Remove all Items
      </button>
      <div className='cart__subtotal-summary'>
        <p>
          Shipping cost:{' '}
          <strong>{!shippingCost ? 'Free Shipping' : '$3'}</strong>
        </p>
        <NumberFormat
          displayType={'text'}
          thousandSeparator={true}
          decimalSeparator='.'
          decimalScale={2}
          prefix={'$'}
          value={totalCost}
          renderText={(value) => (
            <p>
              Subtotal ({itemsQuantity} items):
              <strong>{` ${value}`}</strong>
            </p>
          )}
        />
        <button
          className='cart__subtotal-summary-btn'
          onClick={(e) => history.push('/checkout')}
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  )
}

export default CartSubtotal
