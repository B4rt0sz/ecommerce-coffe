import Cookie from '../components/PrivacyPage/Cookie'
import General from '../components/PrivacyPage/General'

const PrivacyPage = () => {
  return (
    <section className='privacy'>
      <div className='container'>
        <h1 className='privacy__title'>Privacy Policy</h1>
        <General />
        <Cookie />
      </div>
    </section>
  )
}

export default PrivacyPage
