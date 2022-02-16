import moment from 'moment'
import NumberFormat from 'react-number-format'

const Order = ({ order }) => {
  const ordersItem = () => {
    const orderItem = order.data.cart?.map((item, i) => {
      let itemPurchaseType

      if (item.category === 'merchandise') itemPurchaseType = item.purchaseType
      else if (item.category === 'coffee' && item.purchaseType === 'one-time')
        itemPurchaseType = `${item.purchaseType}`
      else itemPurchaseType = `${item.purchaseType} | ${item.subscription}`

      const oneItem = (
        <div className='account__orders-container-order-product' key={i}>
          <img src={item.image} alt='product' />
          <div className='info'>
            <h4>{item.title}</h4>
            <p>{itemPurchaseType}</p>
            {item.size ? <p>{item.size}g</p> : null}
            <div className='summary'>
              <p>
                <strong>{item.cartQuantity}pc</strong>
              </p>
              <p>
                $<strong>{item.price}</strong>
              </p>
            </div>
          </div>
        </div>
      )
      return oneItem
    })
    return orderItem
  }

  return (
    <div className='account__orders-container-order'>
      <h3 className='account__orders-container-order-title'>
        Order: <small>{order.id}</small>
      </h3>
      <p className='account__orders-container-order-date'>
        {moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}
      </p>
      {ordersItem()}
      <div className='account__orders-container-order-delivery'>
        <p>
          Delivery option:{' '}
          <small>
            {order.data.shippingAddress.delivery === 'courier'
              ? 'Courier'
              : 'Parcel Locker'}{' '}
            {order.data.shippingAddress.lockerNumber
              ? `(${order.data.shippingAddress.lockerNumber})`
              : null}
          </small>
        </p>
      </div>
      <div className='account__orders-container-order-shipping'>
        <p>
          Shipping cost:{' '}
          <small>
            {order.data.shippingCost === '$3' ? '$3' : 'Free Shipping'}
          </small>
        </p>
      </div>
      <div className='account__orders-container-order-total'>
        <NumberFormat
          displayType={'text'}
          thousandSeparator={true}
          decimalSeparator='.'
          decimalScale={2}
          prefix={'$'}
          value={order.data.amount / 100}
          renderText={(value) => (
            <p>
              Order Total:
              <strong>{` ${value}`}</strong>
            </p>
          )}
        />
      </div>
    </div>
  )
}

export default Order
