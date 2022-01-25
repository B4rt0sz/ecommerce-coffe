import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/slices/cartSlice'

const ProductDescription = ({ data, id }) => {
  const coffeeData = data.find((coffee) => coffee.url === id)
  const [size, setSize] = useState(250)
  const [selectedPurchase, setSelectedPurchase] = useState('one-time')
  const [selectedSubscription, setSelectedSubscription] = useState('3 months')
  const [freeShipping, setFreeShipping] = useState(false)
  const dispatch = useDispatch()

  const isPurchaseSelected = (value) => selectedPurchase === value
  const productTitle = coffeeData.title
  const productFlavor = coffeeData.flavor
  let subscriptionText
  let currentPrice = 16
  let idSuffix = ''

  if (size === 250 && selectedPurchase === 'one-time') {
    currentPrice = coffeeData.price250g
    idSuffix = 'o250'
  } else if (
    size === 250 &&
    selectedPurchase === 'subscription' &&
    selectedSubscription === '3 months'
  ) {
    currentPrice = coffeeData.price250g * 3
    idSuffix = 's2503'
  } else if (
    size === 250 &&
    selectedPurchase === 'subscription' &&
    selectedSubscription === '6 months'
  ) {
    currentPrice = coffeeData.price250g * 5
    idSuffix = 's2506'
  } else if (
    size === 250 &&
    selectedPurchase === 'subscription' &&
    selectedSubscription === '12 months'
  ) {
    currentPrice = coffeeData.price250g * 10
    idSuffix = 's25012'
  } else if (
    size === 250 &&
    selectedPurchase === 'subscription' &&
    selectedSubscription === '24 months'
  ) {
    currentPrice = coffeeData.price250g * 21
    idSuffix = 's25024'
  } else if (size === 500 && selectedPurchase === 'one-time') {
    currentPrice = coffeeData.price500g
    idSuffix = 'o500'
  } else if (
    size === 500 &&
    selectedPurchase === 'subscription' &&
    selectedSubscription === '3 months'
  ) {
    currentPrice = coffeeData.price500g * 3
    idSuffix = 's5003'
  } else if (
    size === 500 &&
    selectedPurchase === 'subscription' &&
    selectedSubscription === '6 months'
  ) {
    currentPrice = coffeeData.price500g * 5
    idSuffix = 's5006'
  } else if (
    size === 500 &&
    selectedPurchase === 'subscription' &&
    selectedSubscription === '12 months'
  ) {
    currentPrice = coffeeData.price500g * 10
    idSuffix = 's50012'
  } else if (
    size === 500 &&
    selectedPurchase === 'subscription' &&
    selectedSubscription === '24 months'
  ) {
    currentPrice = coffeeData.price500g * 21
    idSuffix = 's50024'
  }

  const smallSize = () => {
    setSize(250)
  }

  const bigSize = () => {
    setSize(500)
  }

  const handlePurchaseOption = (e) => {
    const value = e.target.value
    if (value === 'one-time') {
      setSelectedPurchase(e.target.value)
      setFreeShipping(false)
      setSelectedSubscription('3 months')
    } else {
      setSelectedPurchase(e.target.value)
      setFreeShipping(true)
    }
  }

  const handleSubscriptionOption = (e) => {
    setSelectedSubscription(e.target.value)
  }

  if (selectedSubscription === '3 months')
    subscriptionText = 'Your subscription will include free shipping.'
  else if (selectedSubscription === '6 months')
    subscriptionText =
      'Your subscription will include free shipping and a one month free.'
  else if (selectedSubscription === '12 months')
    subscriptionText =
      'Your subscription will include free shipping and a two months free.'
  else
    subscriptionText =
      'Your subscription will include free shipping and a three months free.'

  const subscribeOption = (
    <div className='coffeeProduct__description-purchase-subscribeOption'>
      <label htmlFor='selection'>
        <select
          name='options'
          id='selection'
          value={selectedSubscription}
          onChange={handleSubscriptionOption}
        >
          <option value='3 months'>3-month plan</option>
          <option value='6 months'>6-month plan</option>
          <option value='12 months'>12-month plan</option>
          <option value='24 months'>24-month plan</option>
        </select>
      </label>
      <p>{subscriptionText}</p>
    </div>
  )

  const description = coffeeData.description.map((info, index) => (
    <p key={index}>{info}</p>
  ))

  const descriptionInfo = (
    <>
      <ul>
        <li>
          <span>Region:</span> {coffeeData.region}
        </li>
        <li>
          <span>Variety:</span> {coffeeData.variety}
        </li>
        <li>
          <span>Roast level:</span> {coffeeData.roast}
        </li>
        <li>
          <span>SCA Score:</span> {coffeeData.scaScroe}
        </li>
      </ul>
      {description}
    </>
  )

  const descriptionSize = (
    <>
      <h3>Size:</h3>
      <button className={size === 250 ? 'active' : null} onClick={smallSize}>
        250g
      </button>
      <button className={size === 500 ? 'active' : null} onClick={bigSize}>
        500g
      </button>
    </>
  )

  const descriptionPurchase = (
    <>
      <h3>Type of Purchase:</h3>
      <div className='coffeeProduct__description-purchase-subscribe'>
        <label htmlFor='one-time'>
          <input
            type='radio'
            id='one-time'
            value='one-time'
            checked={isPurchaseSelected('one-time')}
            onChange={handlePurchaseOption}
          />
          One time
          <span className='customDot'></span>
        </label>
      </div>
      <div className='coffeeProduct__description-purchase-subscribe'>
        <label htmlFor='subscription'>
          <input
            type='radio'
            id='subscription'
            value='subscription'
            checked={isPurchaseSelected('subscription')}
            onChange={handlePurchaseOption}
          />
          Subscribe and Save!
          <span className='customDot'></span>
        </label>
      </div>
      {selectedPurchase === 'subscription' ? subscribeOption : null}
    </>
  )

  const handleAddToCart = () => {
    const product = {
      id: coffeeData._id + idSuffix,
      title: productTitle,
      category: coffeeData.category,
      image: coffeeData.images[0],
      size: size,
      purchaseType: selectedPurchase,
      subscription: selectedSubscription,
      freeShipping: freeShipping,
      price: currentPrice,
    }

    dispatch(addToCart(product))
  }

  return (
    <div className='coffeeProduct__description'>
      <h1 className='coffeeProduct__description-title'>{productTitle}</h1>
      <h2 className='coffeeProduct__description-flavor'>{productFlavor}</h2>
      <h3 className='coffeeProduct__description-price'>{`$${currentPrice}`}</h3>

      <div className='coffeeProduct__description-info'>{descriptionInfo}</div>

      <div className='coffeeProduct__description-size'>{descriptionSize}</div>

      <div className='coffeeProduct__description-purchase'>
        {descriptionPurchase}
      </div>

      <button
        className='coffeeProduct__description-btn'
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDescription
