import coffeeVideo from '../../../public/videos/video.mp4'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Video = () => {
  return (
    <section className='home__banner'>
      <video
        className='home__banner-video'
        src={coffeeVideo}
        autoPlay
        loop
        muted
        type='video/mp4'
      ></video>
      <div className='home__banner-overlay'></div>
      <div className='home__banner-text'>
        <h2>Coffee is Ego</h2>
        <NavLink to='/shop'>
          <motion.p whileHover={{ scale: 1.1, letterSpacing: '1px' }}>
            Choose your Ego
          </motion.p>
        </NavLink>
      </div>
    </section>
  )
}

export default Video
