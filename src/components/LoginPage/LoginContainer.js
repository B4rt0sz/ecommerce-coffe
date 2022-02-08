import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { toast } from 'react-toastify'

import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true)
  }

  const history = useHistory()
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter your Email address.')
      .email('Please enter a valid Email address.'),
    password: yup.string().required('Please enter your Password.'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const loginAccount = (data) => {
    const email = data.email
    const password = data.password

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          toast.success(`You logged in!`, {
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
          history.push('/')
        }
      })
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          toast.error(`Incorrect username or password!`, {
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
        } else if (err.code === 'auth/wrong-password') {
          toast.error(`Incorrect username or password!`, {
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
        } else if (err.code === 'auth/too-many-requests') {
          toast.error(
            ` Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.`,
            {
              position: 'top-center',
              autoClose: 8000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: 'dark',
              style: { fontSize: '16px' },
            }
          )
        }
      })
  }

  return (
    <div className='login__container'>
      <form
        className='login__container-form'
        onSubmit={handleSubmit(loginAccount)}
      >
        <input
          className='login__container-form-input'
          type='text'
          placeholder='Email'
          {...register('email')}
        />

        {errors.email && (
          <p className='login__container-form-error'>{errors.email.message}</p>
        )}

        <label>
          <input
            className='login__container-form-input'
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
          <p className='login__container-form-error'>
            {errors.password.message}
          </p>
        )}

        <div className='login__container-form-forgot'>
          <NavLink to='/forgot'>
            <span>Forgot your password?</span>
          </NavLink>
        </div>

        <input
          className='login__container-form-submit'
          type='submit'
          value='Sign In'
        ></input>
      </form>

      <div className='login__container-register'>
        <p>
          New customer?
          <NavLink to='/register'>
            <span> Sign up for an account!</span>
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default LoginContainer
