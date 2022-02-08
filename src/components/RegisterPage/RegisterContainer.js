import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { toast } from 'react-toastify'

import { auth, db } from '../../firebase'
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const RegisterContainer = () => {
  const [showPassword, setShowPassword] = useState(false)
  const history = useHistory()

  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true)
  }

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
    email: yup
      .string()
      .required('Please enter your Email address.')
      .min(2, 'At least two characters are required.')
      .email('Please enter a valid Email address.'),
    password: yup
      .string()
      .required('Please enter your Password.')
      .min(8, 'Must be 8 characters or more')
      .matches(/[a-z]+/, 'One lowercase character')
      .matches(/[A-Z]+/, 'One uppercase character')
      .matches(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]+/,
        'One special character'
      )
      .matches(/\d+/, 'One number'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const registerAccount = (data) => {
    const email = data.email
    const password = data.password
    const firstName = data.firstName
    const lastName = data.lastName

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        setDoc(doc(db, 'users', auth.user.uid), {
          firstName: firstName,
          lastName: lastName,
          address: '',
          zipCode: '',
          city: '',
          country: '',
          phone: '',
          nip: '',
          company: '',
        })
      })
      .then(() => {
        toast.success(`Account successfully created!`, {
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
        history.push('/account')
      })
      .catch((err) => {
        if (err.code === 'auth/email-already-in-use') {
          toast.error(`Email already in use!`, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'dark',
            style: { fontSize: '16px' },
          })
        }
      })
  }

  return (
    <div className='register__container'>
      <form
        className='register__container-form'
        onSubmit={handleSubmit(registerAccount)}
      >
        <input
          className='register__container-form-input'
          type='text'
          placeholder='First Name'
          {...register('firstName')}
        />

        {errors.firstName && (
          <p className='register__container-form-error'>
            {errors.firstName.message}
          </p>
        )}

        <input
          className='register__container-form-input'
          type='text'
          placeholder='Last Name'
          {...register('lastName')}
        />

        {errors.lastName && (
          <p className='register__container-form-error'>
            {errors.lastName.message}
          </p>
        )}

        <input
          className='register__container-form-input'
          type='text'
          placeholder='Email'
          {...register('email')}
        />

        {errors.email && (
          <p className='register__container-form-error'>
            {errors.email.message}
          </p>
        )}

        <label>
          <input
            className='register__container-form-input'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            {...register('password')}
          />
          {showPassword ? (
            <IoEye onClick={togglePasswordVisiblity} />
          ) : (
            <IoEyeOff onClick={togglePasswordVisiblity} />
          )}
        </label>

        {errors.password && (
          <p className='register__container-form-error'>
            {errors.password.message}
          </p>
        )}

        <input
          className='register__container-form-submit'
          type='submit'
          value='Create Account'
        ></input>
      </form>
    </div>
  )
}

export default RegisterContainer
