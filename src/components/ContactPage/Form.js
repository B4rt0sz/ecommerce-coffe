import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { motion } from 'framer-motion'

const Form = () => {
  const [messageSend, setMessageSend] = useState(false)

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Please enter your name.')
      .min(2, 'At least two characters are required.')
      .matches(/^[aA-zZ\s]+$/, 'Name should not contain numbers')
      .max(30, 'The max number of characters is thirty.'),
    email: yup
      .string()
      .required('Please enter your email address.')
      .min(2, 'At least two characters are required.')
      .email('Please enter a valid email address.'),
    message: yup
      .string()
      .required('Please enter your message.')
      .min(10, 'At least ten characters are required.')
      .max(
        1000,
        'Spam Suspected! Please shorten your message to two thousand characters.'
      ),
    checkbox: yup.boolean().oneOf([true], 'Check is required.'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const sendEmail = () => {
    reset()
    setMessageSend(true)
    setTimeout(() => setMessageSend(false), 3000)
  }

  const text = {
    text1:
      'Do not hesitate to write to us, there are no stupid questions regarding coffee!',
    text2: 'We are happy to help clear your doubts.',
  }

  return (
    <div className='contact__form'>
      <div className='contact__form-text'>
        <p>{text.text1}</p>
        <p>{text.text2}</p>
      </div>
      <form
        className='contact__form-container'
        onSubmit={handleSubmit(sendEmail)}
      >
        <input
          className='contact__form-container-input'
          type='text'
          placeholder='Name'
          {...register('name')}
        />
        {errors.name && (
          <p className='contact__form-container-error'>{errors.name.message}</p>
        )}
        <input
          className='contact__form-container-input'
          type='text'
          placeholder='E-mail'
          {...register('email')}
        />
        {errors.email && (
          <p className='contact__form-container-error'>
            {errors.email.message}
          </p>
        )}
        <textarea
          className='contact__form-container-textarea'
          placeholder='Message'
          {...register('message')}
        />
        {errors.message && (
          <p className='contact__form-container-error'>
            {errors.message.message}
          </p>
        )}

        <label className='contact__form-container-label' htmlFor='checkbox'>
          <input
            defaultChecked={false}
            id='checkbox'
            type='checkbox'
            {...register('checkbox')}
          />
          <span>
            I have read the Terms & Conditions and the Privacy Policy.
          </span>
        </label>

        {errors.checkbox && (
          <p className='contact__form-container-error'>
            {errors.checkbox.message}
          </p>
        )}

        {messageSend && (
          <p className='contact__form-container-success'>
            Your message has been sent!
          </p>
        )}
        <motion.input
          className='contact__form-container-submit'
          type='submit'
          value='Send'
          whileHover={{
            backgroundColor: '#996e34',
          }}
        ></motion.input>
      </form>
    </div>
  )
}

export default Form
