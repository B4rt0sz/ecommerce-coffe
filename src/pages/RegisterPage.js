import { useEffect } from 'react'
import RegisterContainer from '../components/RegisterPage/RegisterContainer'

const RegisterPage = () => {
  useEffect(() => {
    document.title = 'Register | EGO COFFE'
  }, [])

  return (
    <section className='register'>
      <div className='container'>
        <h1 className='register__title'>Register</h1>
        <RegisterContainer />
      </div>
    </section>
  )
}

export default RegisterPage
