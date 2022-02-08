import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'

import { auth } from '../../firebase'
import { sendPasswordResetEmail } from 'firebase/auth'

const LoginContainer = () => {
  const history = useHistory()
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter your Email address.')
      .email('Please enter a valid Email address.'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const forgotPassword = (data) => {
    const email = data.email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`Email with a link to change your password was sent!`, {
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
        history.push('/login')
      })
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          toast.error(`No account found with that email!`, {
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
    <div className='forgot__container'>
      <form
        className='forgot__container-form'
        onSubmit={handleSubmit(forgotPassword)}
      >
        <input
          className='forgot__container-form-input'
          type='text'
          placeholder='Email'
          {...register('email')}
        />

        {errors.email && (
          <p className='forgot__container-form-error'>{errors.email.message}</p>
        )}

        <input
          className='forgot__container-form-submit'
          type='submit'
          value='Sumbit'
        ></input>
      </form>
    </div>
  )
}

export default LoginContainer
