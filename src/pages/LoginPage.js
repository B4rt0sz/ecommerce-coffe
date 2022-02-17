import { useEffect } from 'react'
import LoginContainer from '../components/LoginPage/LoginContainer'

const LoginPage = () => {
  useEffect(() => {
    document.title = 'Login | EGO COFFE'
  }, [])

  return (
    <section className='login'>
      <div className='container'>
        <h1 className='login__title'>Login</h1>
        <LoginContainer />
      </div>
    </section>
  )
}

export default LoginPage
