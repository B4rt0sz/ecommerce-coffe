import NavLinks from './NavLinks'

const Navigation = ({ length }) => {
  return <nav className='header__menu'>{<NavLinks length={length} />}</nav>
}

export default Navigation
