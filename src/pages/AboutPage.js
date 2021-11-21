import Introduction from '../components/AboutPage/Introduction'
import Info from '../components/AboutPage/Info'

import ArekIMG from '../../public/images/aboutArek.jpg'
import ZuzaIMG from '../../public/images/aboutZuza.jpg'

const AboutPage = () => {
  return (
    <section className='about'>
      <div className='container'>
        <h1 className='about__title'>About Us</h1>
        <Introduction />
        <img className='about__img' src={ZuzaIMG} alt='zuza' />
        <Info />
        <img className='about__img' src={ArekIMG} alt='arek' />
      </div>
    </section>
  )
}

export default AboutPage
