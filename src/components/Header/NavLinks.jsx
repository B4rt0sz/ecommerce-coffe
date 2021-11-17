import { NavLink, useLocation } from 'react-router-dom'
import { useIsMobile } from '../../hooks/useMediaQuery'

const NavLinks = ({ closeMobileMenu }) => {
  const isMobile = useIsMobile()
  const location = useLocation()

  const classList = isMobile ? 'header__menuMobile-list' : 'header__menu-list'
  const classItem = isMobile ? 'header__menuMobile-item' : 'header__menu-item'

  const isCurrentURL = (url) => {
    return location.pathname.toLowerCase() === url.toLowerCase()
  }

  const menuList = [
    { name: 'home', path: '/', exact: true },
    { name: 'shop', path: '/shop' },
    { name: 'subscription', path: '/subscription' },
    { name: 'about us', path: '/about_us' },
    { name: 'contact', path: '/contact' },
    { name: 'log in', path: '/login' },
  ]

  const menu = menuList.map(
    (section) =>
      !isCurrentURL(section.path) && (
        <li
          className={classItem}
          key={section.name}
          onClick={() => isMobile && closeMobileMenu()}
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
  return <ul className={classList}>{menu}</ul>
}

export default NavLinks
