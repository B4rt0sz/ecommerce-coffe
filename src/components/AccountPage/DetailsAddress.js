import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'

import { auth, db } from '../../firebase'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'

const DetailsAddress = () => {
  const userData = doc(db, 'users', auth.currentUser.uid)
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
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
  }, [userInfo])

  useEffect(() => {
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
  }, [])

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

  const changeAddress = (data) => {
    setDoc(userData, {
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      zipCode: data.zipCode,
      city: data.city,
      country: data.country,
      phone: data.phone,
      nip: data.nip,
      company: data.company,
    })
      .then(() => {
        reset()
        toast.success(`Address successfully updated!`, {
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
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='account__details-address'>
      <h2 className='account__details-address-title'>Account address:</h2>
      <form
        className='account__details-address-form'
        onSubmit={handleSubmit(changeAddress)}
      >
        <input
          className='account__details-address-form-input'
          type='text'
          placeholder='First Name'
          {...register('firstName')}
        />
        {errors.firstName && (
          <p className='account__details-address-form-error'>
            {errors.firstName.message}
          </p>
        )}

        <input
          className='account__details-address-form-input'
          type='text'
          placeholder='Last Name'
          {...register('lastName')}
        />
        {errors.lastName && (
          <p className='account__details-address-form-error'>
            {errors.lastName.message}
          </p>
        )}

        <input
          className='account__details-address-form-input'
          type='text'
          placeholder='Address'
          {...register('address')}
        />
        {errors.address && (
          <p className='account__details-address-form-error'>
            {errors.address.message}
          </p>
        )}

        <input
          className='account__details-address-form-input'
          type='text'
          placeholder='Zip Code'
          {...register('zipCode')}
        />
        {errors.zipCode && (
          <p className='account__details-address-form-error'>
            {errors.zipCode.message}
          </p>
        )}

        <input
          className='account__details-address-form-input'
          type='text'
          placeholder='City'
          {...register('city')}
        />
        {errors.city && (
          <p className='account__details-address-form-error'>
            {errors.city.message}
          </p>
        )}

        <input
          className='account__details-address-form-input'
          type='text'
          placeholder='Country'
          {...register('country')}
        />
        {errors.country && (
          <p className='account__details-address-form-error'>
            {errors.country.message}
          </p>
        )}

        <input
          className='account__details-address-form-input'
          type='text'
          placeholder='Phone Number'
          {...register('phone')}
        />
        {errors.phone && (
          <p className='account__details-address-form-error'>
            {errors.phone.message}
          </p>
        )}

        <input
          className='account__details-address-form-input'
          type='text'
          placeholder='Nip (optional)'
          {...register('nip')}
        />

        <input
          className='account__details-address-form-input'
          type='text'
          placeholder='Company (optional)'
          {...register('company')}
        />

        <input
          className='account__details-address-form-submit'
          type='submit'
          value='Update Address'
        ></input>
      </form>
    </div>
  )
}

export default DetailsAddress
