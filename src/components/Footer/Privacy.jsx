import { Link } from 'react-router-dom'

const Privacy = () => {
  return (
    <div className='footer__privacy'>
      <p>© 2021 EGO COFFE. All rights reserved.</p>
      <Link to='/privacy-policy' target='_self'>
        Privacy Policy
      </Link>
      <Link to='/terms-conditions' target='_self'>
        Terms & Conditions
      </Link>
    </div>
  )
}

export default Privacy
