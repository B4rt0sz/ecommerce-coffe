import Designer from '../components/Footer/Designer'
import SocialMedia from '../components/Footer/SocialMedia'
import Privacy from '../components/Footer/Privacy'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <Privacy />
        <SocialMedia />
        <Designer />
      </div>
    </div>
  )
}

export default Footer
