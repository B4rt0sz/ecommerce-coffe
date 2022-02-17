import { useEffect } from 'react'
import Details from '../components/ContactPage/Details'
import Form from '../components/ContactPage/Form'

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact | EGO COFFE'
  }, [])

  return (
    <section className='contact'>
      <div className='container'>
        <h1 className='contact__title'>Contact</h1>
        <Details />
        <Form />
      </div>
    </section>
  )
}

export default ContactPage
