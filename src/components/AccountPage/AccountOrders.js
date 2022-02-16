import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { db, auth } from '../../firebase'
import { query, orderBy, collection, onSnapshot } from 'firebase/firestore'
import Order from './Order'

const AccountOrders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (auth) {
      const citiesRef = collection(db, 'users', auth.currentUser.uid, 'orders')
      const q = query(citiesRef, orderBy('created', 'desc'))
      onSnapshot(q, (snapshot) =>
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
    } else {
      setOrders([])
    }
  }, [auth])

  return (
    <>
      {orders?.length === 0 ? (
        <div className='account__noOrders'>
          <p>
            No order has been placed.
            <NavLink to='/shop'>
              <span> Maybe time to change this?</span>
            </NavLink>
          </p>
        </div>
      ) : (
        <div className='account__orders'>
          <h2 className='account__orders-title'>Your Orders:</h2>
          <div className='account__orders-container'>
            {orders?.map((order, index) => (
              <Order order={order} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default AccountOrders
