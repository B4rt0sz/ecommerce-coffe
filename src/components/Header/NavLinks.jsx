import { NavLink, useLocation } from 'react-router-dom'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { IoCartOutline } from 'react-icons/io5'

import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'

import { toast } from 'react-toastify'

import { useSelector } from 'react-redux'
import { isUserLogged } from '../../store/slices/userSlice'

const NavLinks = ({ closeMobileMenu, length, allowScroll }) => {
  const showMenu = useSelector(isUserLogged)

  const isMobile = useIsMobile()
  const location = useLocation()

  const classList = isMobile ? 'header__menuMobile-list' : 'header__menu-list'
  const classItem = isMobile ? 'header__menuMobile-item' : 'header__menu-item'
  const cartClass = isMobile ? 'header__menuMobile-cart' : 'header__menu-cart'

  const isCurrentURL = (url) => {
    return location.pathname.toLowerCase() === url.toLowerCase()
  }

  const menuList = [
    { name: 'home', path: '/', exact: true },
    { name: 'shop', path: '/shop' },
    { name: 'subscription', path: '/subscription' },
    { name: 'about us', path: '/about_us' },
    { name: 'contact', path: '/contact' },
  ]

  const logout = () => {
    isMobile && closeMobileMenu()
    signOut(auth)
    allowScroll()
    toast.success(`You logged out!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark',
      style: { fontSize: '16px' },
    })
  }

  const login = !showMenu ? (
    <li
      className={classItem}
      onClick={() => {
        isMobile && closeMobileMenu()
        allowScroll()
      }}
    >
      <NavLink to='/login'>log in</NavLink>
    </li>
  ) : (
    <>
      {!isCurrentURL('/account') && (
        <li
          className={classItem}
          onClick={() => {
            isMobile && closeMobileMenu()
            allowScroll()
          }}
        >
          <NavLink to='/account'>account</NavLink>
        </li>
      )}
      <li className={classItem} onClick={logout}>
        <NavLink to='/'>sign out</NavLink>
      </li>
    </>
  )

  const cart = !isMobile ? (
    <li className={cartClass}>
      <NavLink to='/cart'>
        <IoCartOutline />
        {length ? <span>{length}</span> : null}
      </NavLink>
    </li>
  ) : null

  const menu = menuList.map(
    (section) =>
      !isCurrentURL(section.path) && (
        <li
          className={classItem}
          key={section.name}
          onClick={() => {
            isMobile && closeMobileMenu()
            allowScroll()
          }}
        >
          <NavLink
            to={section.path}
            exact={section.exact ? section.exact : false}
          >
            {section.name}
          </NavLink>
        </li>
      )
  )
  return (
    <>
      <ul className={classList}>
        {menu}
        {login}
        {cart}
      </ul>
    </>
  )
}

export default NavLinks
