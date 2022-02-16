import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import CartProduct from '../components/CartPage/CartProduct'
import CartSubtotal from '../components/CartPage/CartSubtotal'
import CartTitles from '../components/CartPage/CartTitles'
import { selectItems } from '../store/slices/cartSlice'

const CartPage = () => {
  const items = useSelector(selectItems)

  return (
    <section className='cart'>
      <div className='container'>
        <h1 className='cart__title'>Cart</h1>

        {!items.length ? (
          <div className='cart__empty'>
            <p>Your cart is currently empty.</p>
            <NavLink to='/shop'>
              <button className='cart__empty-btn'>Choose your products</button>
            </NavLink>
          </div>
        ) : (
          <>
            <CartTitles />
            {items?.map((item, i) => (
              <CartProduct
                key={i}
                title={item.title}
                category={item.category}
                image={item.image}
                size={item.size}
                quantity={item.cartQuantity}
                purchaseType={item.purchaseType}
                subscription={item.subscription}
                price={item.price}
                item={item}
              />
            ))}
            <CartSubtotal />
          </>
        )}
      </div>
    </section>
  )
}

export default CartPage
