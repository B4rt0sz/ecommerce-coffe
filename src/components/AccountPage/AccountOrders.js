import { NavLink } from 'react-router-dom'

const AccountOrders = () => {
  const showOrder = false
  // const showOrder = true

  return (
    <div className='account__orders'>
      {showOrder ? (
        //
        //
        //
        <p>orders</p>
      ) : (
        <p className='account__orders-noOrders'>
          No order has been placed.
          <NavLink to='/shop'>
            <span> Maybe time to change this?</span>
          </NavLink>
        </p>
      )}
    </div>
  )
}

export default AccountOrders
