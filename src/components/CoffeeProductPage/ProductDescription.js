import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/slices/cartSlice'

const ProductDescription = ({ data, id }) => {
  const dispatch = useDispatch()
  const coffeeData = data.find((coffee) => coffee.url === id)
  const [size, setSize] = useState(250)
  const [selectedPurchase, setSelectedPurchase] = useState('one-time')
  const [selectedSubscription, setSelectedSubscription] = useState(1)
  const [freeShipping, setFreeShipping] = useState(false)
  const productTitle = coffeeData.title
  const productFlavor = coffeeData.flavor
  const subscriptionText = {
    3: 'Your subscription will include free shipping.',
    6: 'Your subscription will include free shipping and a one month free.',
    12: 'Your subscription will include free shipping and a two months free.',
    24: 'Your subscription will include free shipping and a three months free.',
  }
  const timePeriod = {
    1: 1,
    3: 3,
    6: 5,
    12: 10,
    24: 21,
  }
  const currentPrice =
    coffeeData[`price${size}g`] * timePeriod[selectedSubscription]

  const handlePurchaseOption = (e) => {
    const value = e.target.value
    if (value === 'one-time') {
      setSelectedPurchase(e.target.value)
      setFreeShipping(false)
      setSelectedSubscription(1)
    } else {
      setSelectedPurchase(e.target.value)
      setFreeShipping(true)
      setSelectedSubscription(3)
    }
  }

  const handleSubscriptionOption = (e) => {
    setSelectedSubscription(e.target.value)
  }

  const subscribeOption = (
    <div className='coffeeProduct__description-purchase-subscribeOption'>
      <label htmlFor='selection'>
        <select
          name='options'
          id='selection'
          value={selectedSubscription}
          onChange={handleSubscriptionOption}
        >
          <option value={3}>3-month plan</option>
          <option value={6}>6-month plan</option>
          <option value={12}>12-month plan</option>
          <option value={24}>24-month plan</option>
        </select>
      </label>
      <p>{subscriptionText[selectedSubscription]}</p>
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

  const handleClickSmallSize = () => setSize(250)
  const handleClickBigSize = () => setSize(500)

  const descriptionSize = (
    <>
      <h3>Size:</h3>
      <button
        className={size === 250 ? 'active' : null}
        onClick={handleClickSmallSize}
      >
        250g
      </button>
      <button
        className={size === 500 ? 'active' : null}
        onClick={handleClickBigSize}
      >
        500g
      </button>
    </>
  )

  const isPurchaseSelected = (value) => selectedPurchase === value

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
      id: coffeeData._id + size + selectedPurchase + selectedSubscription,
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
