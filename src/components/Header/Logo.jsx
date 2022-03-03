import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to='/' className='header__logo'>
      <img src='/images/logo.png' alt='logo' />
    </NavLink>
  )
}

export default Logo
