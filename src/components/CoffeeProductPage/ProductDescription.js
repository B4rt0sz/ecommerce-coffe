import { useState } from 'react'

const ProductDescription = ({ data, id }) => {
  const coffeeData = data.find((coffee) => coffee.url === id)
  const [size, setSize] = useState(250)
  const [selectedPurchase, setSelectedPurchase] = useState('oneTime')
  const [selectedSubscription, setSelectedSubscription] = useState('3months')
  const [isShippingFree, setIsShippingFree] = useState('no')

  const isPurchaseSelected = (value) => selectedPurchase === value
  const productTitle = coffeeData.title
  const productFlavor = coffeeData.flavor
  let subscriptionText
  let currentPrice = 16

  if (size === 250 && selectedPurchase === 'oneTime')
    currentPrice = coffeeData.price250g
  else if (
    size === 250 &&
    selectedPurchase === 'subscribe' &&
    selectedSubscription === '3months'
  )
    currentPrice = coffeeData.price250g * 3
  else if (
    size === 250 &&
    selectedPurchase === 'subscribe' &&
    selectedSubscription === '6months'
  )
    currentPrice = coffeeData.price250g * 5
  else if (
    size === 250 &&
    selectedPurchase === 'subscribe' &&
    selectedSubscription === '12months'
  )
    currentPrice = coffeeData.price250g * 10
  else if (
    size === 250 &&
    selectedPurchase === 'subscribe' &&
    selectedSubscription === '24months'
  )
    currentPrice = coffeeData.price250g * 21
  else if (size === 500 && selectedPurchase === 'oneTime')
    currentPrice = coffeeData.price500g
  else if (
    size === 500 &&
    selectedPurchase === 'subscribe' &&
    selectedSubscription === '3months'
  )
    currentPrice = coffeeData.price500g * 3
  else if (
    size === 500 &&
    selectedPurchase === 'subscribe' &&
    selectedSubscription === '6months'
  )
    currentPrice = coffeeData.price500g * 5
  else if (
    size === 500 &&
    selectedPurchase === 'subscribe' &&
    selectedSubscription === '12months'
  )
    currentPrice = coffeeData.price500g * 10
  else if (
    size === 500 &&
    selectedPurchase === 'subscribe' &&
    selectedSubscription === '24months'
  )
    currentPrice = coffeeData.price500g * 21

  const smallSize = () => {
    setSize(250)
  }

  const bigSize = () => {
    setSize(500)
  }

  const handlePurchaseOption = (e) => {
    const value = e.target.value
    if (value === 'oneTime') {
      setSelectedPurchase(e.target.value)
      setIsShippingFree('no')
      setSelectedSubscription('3months')
    } else {
      setSelectedPurchase(e.target.value)
      setIsShippingFree('yes')
    }
  }

  const handleSubscriptionOption = (e) => {
    setSelectedSubscription(e.target.value)
  }

  if (selectedSubscription === '3months')
    subscriptionText = 'Your subscription will include free shipping.'
  else if (selectedSubscription === '6months')
    subscriptionText =
      'Your subscription will include free shipping and a one month free.'
  else if (selectedSubscription === '12months')
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
          <option value='3months'>3-month plan</option>
          <option value='6months'>6-month plan</option>
          <option value='12months'>12-month plan</option>
          <option value='24months'>24-month plan</option>
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
        <label htmlFor='oneTime'>
          <input
            type='radio'
            id='oneTime'
            value='oneTime'
            checked={isPurchaseSelected('oneTime')}
            onChange={handlePurchaseOption}
          />
          One time
          <span className='customDot'></span>
        </label>
      </div>
      <div className='coffeeProduct__description-purchase-subscribe'>
        <label htmlFor='subscribe'>
          <input
            type='radio'
            id='subscribe'
            value='subscribe'
            checked={isPurchaseSelected('subscribe')}
            onChange={handlePurchaseOption}
          />
          Subscribe and Save!
          <span className='customDot'></span>
        </label>
      </div>
      {selectedPurchase === 'subscribe' ? subscribeOption : null}
    </>
  )

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

      <button className='coffeeProduct__description-btn'>Add to Cart</button>
    </div>
  )
}

export default ProductDescription
