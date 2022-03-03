import Introduction from '../components/AboutPage/Introduction'
import Info from '../components/AboutPage/Info'

import { useEffect } from 'react'

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | EGO COFFE'
  }, [])

  return (
    <section className='about'>
      <div className='container'>
        <h1 className='about__title'>About Us</h1>
        <Introduction />
        <img
          className='about__img'
          src='/images/aboutZuza.jpg'
          alt='zuza'
          loading='lazy'
        />
        <Info />
        <img
          className='about__img'
          src='/images/aboutArek.jpg'
          alt='arek'
          loading='lazy'
        />
      </div>
    </section>
  )
}

export default AboutPage
