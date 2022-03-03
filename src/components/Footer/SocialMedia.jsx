import { Link } from 'react-router-dom'

import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'

const instagramURL = 'https://www.instagram.com/egocoffeepl/'
const facebookURL = 'https://www.facebook.com/EGO-COFFEE-607556406416196/'

const SocialMedia = () => {
  return (
    <div className='footer__socialMedia'>
      <Link to={{ pathname: instagramURL }} target='_blank'>
        <AiOutlineInstagram />
      </Link>
      <Link to={{ pathname: facebookURL }} target='_blank'>
        <AiOutlineFacebook />
      </Link>
    </div>
  )
}

export default SocialMedia
