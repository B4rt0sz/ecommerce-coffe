import { AnimatePresence, motion } from 'framer-motion'
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5'
import useToggle from '../../hooks/useToggle'
import { useDisableBodyScroll } from '../../hooks/useDisableBodyScroll'

import NavLinks from './NavLinks'

const MobileNavigation = () => {
  const [isOpen, toggleIsOpen] = useToggle(false)
  const closeMobileMenu = () => toggleIsOpen((isOpen) => !isOpen)
  useDisableBodyScroll(isOpen)

  const menuIcon = !isOpen ? (
    <IoMenuOutline className='header__hamburger-icon' />
  ) : (
    <IoCloseOutline className='header__hamburger-icon' />
  )

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
      <div className='header__hamburger' onClick={toggleIsOpen}>
        {menuIcon}
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
            {<NavLinks closeMobileMenu={closeMobileMenu} />}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNavigation
