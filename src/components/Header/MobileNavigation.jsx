import { NavLink } from 'react-router-dom'
import { useDisableBodyScroll } from '../../hooks/useDisableBodyScroll'
import { useIsMobile } from '../../hooks/useMediaQuery'
import useToggle from '../../hooks/useToggle'
import NavLinks from './NavLinks'
import { AnimatePresence, motion } from 'framer-motion'
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5'
import { IoCartOutline } from 'react-icons/io5'

const MobileNavigation = ({ length }) => {
  const isMobile = useIsMobile()
  const [isOpen, toggleIsOpen] = useToggle(false)
  const closeMobileMenu = () => toggleIsOpen((isOpen) => !isOpen)
  useDisableBodyScroll(isOpen)

  const menuIcon = !isOpen ? (
    <IoMenuOutline className='header__hamburger-icon' onClick={toggleIsOpen} />
  ) : (
    <IoCloseOutline className='header__hamburger-icon' onClick={toggleIsOpen} />
  )

  const cartClass = isMobile ? 'header__menuMobile-cart' : 'header__menu-cart'

  const cart = isMobile ? (
    <div className={cartClass}>
      <NavLink to='/cart'>
        <IoCartOutline />
        {length ? <span>{length}</span> : null}
      </NavLink>
    </div>
  ) : null

  const navVariant = {
    initial: {
      opacity: 0,
      x: '100%',
    },
    animate: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <>
      <div className='header__hamburger'>
        {menuIcon}
        {cart}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className={`header__menuMobile`}
            variants={navVariant}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
          >
            {<NavLinks closeMobileMenu={closeMobileMenu} length={length} />}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNavigation
