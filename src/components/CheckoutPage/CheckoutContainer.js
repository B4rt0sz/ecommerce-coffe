import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from '../../axios'
import NumberFormat from 'react-number-format'
import { toast } from 'react-toastify'

import {
  subtotalAmout,
  shippingPrice,
  selectItems,
  clearCart,
} from '../../store/slices/cartSlice'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { auth, db } from '../../firebase'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'

import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js'

import { showInfo } from '../../store/slices/accountSlice'

const CheckoutContainer = () => {
  let userData = ''
  const history = useHistory()
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState()
  const [delivery, setDelivery] = useState(false)
  const [errorNumber, setErrorNumber] = useState(null)
  const [errorExpiry, setErrorExpiry] = useState(null)
  const [errorCvc, setErrorCvc] = useState(null)
  const [completeNumber, setCompleteNumber] = useState(false)
  const [completeExpiry, setCompleteExpiry] = useState(false)
  const [completeCvc, setCompleteCvc] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [clientSecret, setClientSecret] = useState(true)
  const stripe = useStripe()
  const elements = useElements()
  const itemsPrice = useSelector(subtotalAmout)
  const shippingInfo = useSelector(shippingPrice)
  const items = useSelector(selectItems)
  const disabled =
    completeNumber && completeExpiry && completeCvc ? false : true
  const shippingCost = shippingInfo ? 0 : 3
  const totalCost = itemsPrice + shippingCost

  useEffect(() => {
    if (userInfo) {
      const defaultValues = {
        firstName: userInfo?.firstName,
        lastName: userInfo?.lastName,
        address: userInfo?.address,
        zipCode: userInfo?.zipCode,
        city: userInfo?.city,
        country: userInfo?.country,
        phone: userInfo?.phone,
        nip: userInfo?.nip,
        company: userInfo?.company,
      }
      reset({ ...defaultValues })
    }
  }, [userInfo])

  useEffect(() => {
    if (auth.currentUser) userData = doc(db, 'users', auth.currentUser.uid)
  }, [auth.currentUser])

  useEffect(() => {
    if (userData) {
      onSnapshot(userData, (doc) => {
        setUserInfo({
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          address: doc.data().address,
          zipCode: doc.data().zipCode,
          city: doc.data().city,
          country: doc.data().country,
          phone: doc.data().phone,
          nip: doc.data().nip,
          company: doc.data().company,
        })
      })
    }
  }, [])

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/checkout/create?total=${totalCost * 100}`,
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret()
  }, [items])

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required('Please enter your First Name.')
      .min(2, 'At least two characters are required.')
      .matches(
        /^[aA-zZ-ęóąśłżźćńĘÓĄŚŁŻŹĆŃ\s]+$/,
        'Name should not contain numbers'
      )
      .max(30, 'The max number of characters is thirty.'),
    lastName: yup
      .string()
      .required('Please enter your Last Name.')
      .min(2, 'At least two characters are required.')
      .matches(
        /^[aA-zZ-ęóąśłżźćńĘÓĄŚŁŻŹĆŃ\s]+$/,
        'Name should not contain numbers'
      )
      .max(30, 'The max number of characters is thirty.'),
    address: yup
      .string()
      .required('Please enter your Address.')
      .min(5, 'At least five characters are required.'),
    zipCode: yup
      .string()
      .required('Please enter your Zip Code.')
      .min(4, 'At least four characters are required.')
      .max(9, 'The max number of characters is nine.'),
    city: yup
      .string()
      .required('Please enter your City.')
      .min(2, 'At least two characters are required.')
      .max(35, 'The max number of characters is thirty-five.'),
    country: yup
      .string()
      .required('Please enter your Country.')
      .min(4, 'At least four characters are required.')
      .max(56, 'The max number of characters is fifty-six.'),
    phone: yup
      .string()
      .required('Please enter your Phone Number.')
      .min(9, 'At least nine characters are required.')
      .max(31, 'The max number of characters is thirty-one.'),
    nip: yup.string(),
    company: yup.string(),
    delivery: yup
      .string()
      .nullable()
      .oneOf(['locker', 'courier'])
      .required('Please choose delivery method'),
    lockerNumber: yup.string().when('delivery', (val, schema) => {
      if (val === 'locker')
        return yup
          .string()
          .required()
          .max(15, 'The max number of characters is fifteen.')
      else return yup.string().notRequired()
    }),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  })

  const itemsList = () => {
    const itemList = items?.map((item, i) => {
      let itemPurchaseType

      if (item.category === 'merchandise') itemPurchaseType = item.purchaseType
      else if (item.category === 'coffee' && item.purchaseType === 'one-time')
        itemPurchaseType = `${item.purchaseType}`
      else itemPurchaseType = `${item.purchaseType} | ${item.subscription}`

      const oneItem = (
        <div className='checkout__form-info-items-product' key={i}>
          <img src={item.image} alt='product' />
          <div className='info'>
            <h3>{item.title}</h3>
            <p>{itemPurchaseType}</p>
            <p>{item.size && `${item.size}g`}</p>
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
    return itemList
  }

  const handleCardNumberElement = (e) => {
    setCompleteNumber(e.complete)
    setErrorNumber(e.error ? e.error.message : '')
  }
  const handleCardExpiryElement = (e) => {
    setCompleteExpiry(e.complete)
    setErrorExpiry(e.error ? e.error.message : '')
  }
  const handleCardCvcElement = (e) => {
    setCompleteCvc(e.complete)
    setErrorCvc(e.error ? e.error.message : '')
  }

  const clientOrder = async (data) => {
    if (data && !disabled) {
      setProcessing(true)

      const payload = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardNumberElement),
          },
        })
        .then(({ paymentIntent }) => {
          setErrorNumber(null)
          setErrorExpiry(null)
          setErrorCvc(null)
          setSucceeded(true)
          setProcessing(false)

          toast.success(`Your order has been placed!`, {
            position: 'top-center',
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'dark',
            style: { fontSize: '16px' },
          })

          if (auth.currentUser) {
            const newOrder = doc(
              db,
              'users',
              auth.currentUser.uid,
              'orders',
              paymentIntent.id
            )
            setDoc(newOrder, {
              cart: items,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
              shippingAddress: data,
              shippingCost: !shippingCost ? 'Free Shipping' : '$3',
            })
            dispatch(showInfo(true))
            history.replace('/account')
          } else {
            history.replace('/')
          }

          dispatch(clearCart())
        })
    }
  }

  return (
    <form className='checkout__form' onSubmit={handleSubmit(clientOrder)}>
      <div className='checkout__form-data'>
        <div className='checkout__form-data-address'>
          <h2 className='checkout__form-data-address-title'>
            Delivery address:
          </h2>
          <input
            className='checkout__form-data-address-input'
            type='text'
            placeholder='First Name'
            {...register('firstName')}
          />
          {errors.firstName && (
            <p className='checkout__form-data-address-error'>
              {errors.firstName.message}
            </p>
          )}

          <input
            className='checkout__form-data-address-input'
            type='text'
            placeholder='Last Name'
            {...register('lastName')}
          />
          {errors.lastName && (
            <p className='checkout__form-data-address-error'>
              {errors.lastName.message}
            </p>
          )}

          <input
            className='checkout__form-data-address-input'
            type='text'
            placeholder='Address'
            {...register('address')}
          />
          {errors.address && (
            <p className='checkout__form-data-address-error'>
              {errors.address.message}
            </p>
          )}

          <input
            className='checkout__form-data-address-input'
            type='text'
            placeholder='Zip Code'
            {...register('zipCode')}
          />
          {errors.zipCode && (
            <p className='checkout__form-data-address-error'>
              {errors.zipCode.message}
            </p>
          )}

          <input
            className='checkout__form-data-address-input'
            type='text'
            placeholder='City'
            {...register('city')}
          />
          {errors.city && (
            <p className='checkout__form-data-address-error'>
              {errors.city.message}
            </p>
          )}

          <input
            className='checkout__form-data-address-input'
            type='text'
            placeholder='Country'
            {...register('country')}
          />
          {errors.country && (
            <p className='checkout__form-data-address-error'>
              {errors.country.message}
            </p>
          )}

          <input
            className='checkout__form-data-address-input'
            type='text'
            placeholder='Phone Number'
            {...register('phone')}
          />
          {errors.phone && (
            <p className='checkout__form-data-address-error'>
              {errors.phone.message}
            </p>
          )}

          <input
            className='checkout__form-data-address-input'
            type='text'
            placeholder='Nip (optional)'
            {...register('nip')}
          />

          <input
            className='checkout__form-data-address-input'
            type='text'
            placeholder='Company (optional)'
            {...register('company')}
          />
        </div>
        <div className='checkout__form-data-delivery'>
          <h2 className='checkout__form-data-delivery-title'>
            Delivery method:
          </h2>

          <label
            htmlFor='locker'
            className='checkout__form-data-delivery-label'
          >
            <input
              id='locker'
              type='radio'
              name='delivery'
              value='locker'
              onClick={() => setDelivery(true)}
              {...register('delivery')}
            />
            <p>Parcel locker - InPost</p>
            <span className='customDot'></span>
          </label>
          {delivery && (
            <>
              <input
                className='checkout__form-data-delivery-input'
                type='text'
                placeholder='Pacer locker number'
                {...register('lockerNumber')}
              />
              {errors.lockerNumber && (
                <p className='checkout__form-data-delivery-error-input'>
                  {errors.lockerNumber.message}
                </p>
              )}
            </>
          )}

          <label
            htmlFor='courier'
            className='checkout__form-data-delivery-label'
          >
            <input
              id='courier'
              type='radio'
              name='delivery'
              value='courier'
              onClick={() => setDelivery(false)}
              {...register('delivery')}
            />
            <p>Courier - InPost</p>
            <span className='customDot'></span>
          </label>

          {errors.delivery && (
            <p className='checkout__form-data-delivery-error'>
              {errors.delivery.message}
            </p>
          )}
        </div>
      </div>
      <div className='checkout__form-info'>
        <div className='checkout__form-info-payment'>
          <h2 className='checkout__form-info-payment-title'>Payment method:</h2>
          <CardNumberElement onChange={handleCardNumberElement} />
          {errorNumber && (
            <p className='checkout__form-info-payment-error'>{errorNumber}</p>
          )}
          <CardExpiryElement onChange={handleCardExpiryElement} />
          {errorExpiry && (
            <p className='checkout__form-info-payment-error'>{errorExpiry}</p>
          )}
          <CardCvcElement onChange={handleCardCvcElement} />
          {errorCvc && (
            <p className='checkout__form-info-payment-error'>{errorCvc}</p>
          )}
        </div>
        <div className='checkout__form-info-items'>{itemsList()}</div>
        <div className='checkout__form-info-summary'>
          <p>
            Cart value: <strong>${itemsPrice}</strong>
          </p>
          <p>
            Delivery: <strong>{!shippingCost ? 'Free Shipping' : '$3'}</strong>
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
                Total:
                <strong>{` ${value}`}</strong>
              </p>
            )}
          />
        </div>
        <input
          className='checkout__form-btn'
          type='submit'
          value={processing ? 'Processing' : 'Buy now'}
          disabled={processing || disabled || succeeded}
        ></input>
      </div>
    </form>
  )
}

export default CheckoutContainer
