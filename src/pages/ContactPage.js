import Details from '../components/ContactPage/Details'
import Form from '../components/ContactPage/Form'

const ContactPage = () => {
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
