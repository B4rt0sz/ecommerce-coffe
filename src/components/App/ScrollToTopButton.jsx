import { useEffect, useState } from 'react'
import { IoIosArrowDropupCircle } from 'react-icons/io'

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 250) {
        return setShowButton(true)
      } else {
        return setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {showButton && (
        <IoIosArrowDropupCircle onClick={scrollToTop} className='toTopButton' />
      )}
    </>
  )
}

export default ScrollToTopButton
