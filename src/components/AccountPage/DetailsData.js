import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { toast } from 'react-toastify'

import { auth } from '../../firebase'
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth'

const DetailsData = () => {
  const user = auth.currentUser
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)
  const [userEmail, setUserEmail] = useState(user.email)

  const toggleCurrentPasswordVisiblity = () => {
    setShowCurrentPassword(showCurrentPassword ? false : true)
  }
  const toggleNewPasswordVisiblity = () => {
    setShowNewPassword(showNewPassword ? false : true)
  }
  const toggleRepeatNewPasswordVisiblity = () => {
    setShowRepeatPassword(showRepeatPassword ? false : true)
  }

  const schema = yup.object().shape({
    currentEmail: yup
      .string()
      .required('Please enter your Email address.')
      .email('Please enter a valid Email address.'),
    currentPassword: yup
      .string()
      .required('Please enter your Current Password.'),
    newPassword: yup
      .string()
      .required('Please enter your New Password.')
      .min(8, 'Must be 8 characters or more')
      .matches(/[a-z]+/, 'One lowercase character')
      .matches(/[A-Z]+/, 'One uppercase character')
      .matches(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]+/,
        'One special character'
      )
      .matches(/\d+/, 'One number')
      .notOneOf(
        [yup.ref('currentPassword'), null],
        'Password must be different than current one.'
      ),
    repeatPassword: yup
      .string()
      .required('Please repeat your New Password')
      .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
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

  useEffect(() => {
    const defaultValues = {
      currentEmail: userEmail,
    }
    reset({ ...defaultValues })
  }, [userEmail])

  const changePassword = (data) => {
    const credential = EmailAuthProvider.credential(
      data.currentEmail,
      data.currentPassword
    )

    reauthenticateWithCredential(user, credential)
      .then(() => {
        updatePassword(user, data.repeatPassword)
          .then(() => {
            reset()
            toast.success(`Password successfully changed!`, {
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
            // console.log(err)
          })
      })
      .catch((err) => {
        if (err.code === 'auth/user-mismatch') {
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
        }
      })
  }

  return (
    <div className='account__details-data'>
      <h2 className='account__details-data-title'>Account Details:</h2>
      <form
        className='account__details-data-form'
        onSubmit={handleSubmit(changePassword)}
      >
        <input
          className='account__details-data-form-input'
          type='text'
          placeholder='Current Email'
          {...register('currentEmail')}
        />

        {errors.currentEmail && (
          <p className='account__details-data-form-error'>
            {errors.currentEmail.message}
          </p>
        )}

        <label>
          <input
            className='account__details-data-form-input'
            type={showCurrentPassword ? 'text' : 'password'}
            placeholder='Current Password'
            {...register('currentPassword')}
          />
          {showCurrentPassword ? (
            <IoEye onClick={toggleCurrentPasswordVisiblity} />
          ) : (
            <IoEyeOff onClick={toggleCurrentPasswordVisiblity} />
          )}
        </label>

        {errors.currentPassword && (
          <p className='account__details-data-form-error'>
            {errors.currentPassword.message}
          </p>
        )}

        <label>
          <input
            className='account__details-data-form-input'
            type={showNewPassword ? 'text' : 'password'}
            placeholder='New Password'
            {...register('newPassword')}
          />
          {showNewPassword ? (
            <IoEye onClick={toggleNewPasswordVisiblity} />
          ) : (
            <IoEyeOff onClick={toggleNewPasswordVisiblity} />
          )}
        </label>

        {errors.newPassword && (
          <p className='account__details-data-form-error'>
            {errors.newPassword.message}
          </p>
        )}

        <label>
          <input
            className='account__details-data-form-input'
            type={showRepeatPassword ? 'text' : 'password'}
            placeholder='Repeat New Password'
            {...register('repeatPassword')}
          />
          {showRepeatPassword ? (
            <IoEye onClick={toggleRepeatNewPasswordVisiblity} />
          ) : (
            <IoEyeOff onClick={toggleRepeatNewPasswordVisiblity} />
          )}
        </label>

        {errors.repeatPassword && (
          <p className='account__details-data-form-error'>
            {errors.repeatPassword.message}
          </p>
        )}

        <input
          className='account__details-data-form-submit'
          type='submit'
          value='Change Password'
        ></input>
      </form>
    </div>
  )
}

export default DetailsData
