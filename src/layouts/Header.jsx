import { useIsMobile } from '../hooks/useMediaQuery'

import Logo from '../components/Header/Logo'
import Navigation from '../components/Header/Navigation'
import MobileNavigation from '../components/Header/MobileNavigation'

const Header = () => {
  const isMobile = useIsMobile()

  return (
    <header className='header'>
      <div className='container'>
        <Logo />
        {isMobile ? <MobileNavigation /> : <Navigation />}
      </div>
    </header>
  )
}

export default Header
