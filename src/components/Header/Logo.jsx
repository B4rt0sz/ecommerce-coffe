import { NavLink } from 'react-router-dom'

import logoImg from '../../../public/images/logo.png'

const Logo = () => {
  return (
    <NavLink to='/' className='header__logo'>
      <img src={logoImg} alt='logo' />
    </NavLink>
  )
}

export default Logo
