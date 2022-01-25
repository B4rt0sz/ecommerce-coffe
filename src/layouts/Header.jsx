import { useIsMobile } from '../hooks/useMediaQuery'

import Logo from '../components/Header/Logo'
import Navigation from '../components/Header/Navigation'
import MobileNavigation from '../components/Header/MobileNavigation'
import { useSelector } from 'react-redux'
import { cartAmout } from '../store/slices/cartSlice'

const Header = () => {
  const isMobile = useIsMobile()
  const itemsQuantity = useSelector(cartAmout)

  return (
    <header className='header'>
      <div className='container'>
        <Logo />
        {isMobile ? (
          <MobileNavigation length={itemsQuantity} />
        ) : (
          <Navigation length={itemsQuantity} />
        )}
      </div>
    </header>
  )
}

export default Header
