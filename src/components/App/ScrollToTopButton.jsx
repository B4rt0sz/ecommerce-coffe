import { useEffect, useState } from 'react'
import { IoIosArrowDropupCircle } from 'react-icons/io'

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
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
