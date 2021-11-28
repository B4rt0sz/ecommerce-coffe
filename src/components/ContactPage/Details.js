import { motion } from 'framer-motion'

import {
  IoLocationOutline,
  IoPhonePortraitOutline,
  IoMailOutline,
} from 'react-icons/io5'

const Details = () => {
  return (
    <div className='contact__details'>
      <div className='contact__details-mail'>
        <IoMailOutline className='contact__details-mail-icon' />
        <div className='contact__details-mail-text'>
          <p>Here you can write:</p>
          <motion.a
            href='mailto:twoje@egocoffee.pl'
            target='_blank'
            whileHover={{
              color: '#e6bc75',
            }}
          >
            twoje@egocoffee.pl
          </motion.a>
        </div>
      </div>
      <div className='contact__details-phone'>
        <IoPhonePortraitOutline className='contact__details-phone-icon' />
        <div className='contact__details-phone-text'>
          <p>Here you can call:</p>
          <p>+48 793 471 203</p>
        </div>
      </div>
      <div className='contact__details-pin'>
        <IoLocationOutline className='contact__details-pin-icon' />
        <div className='contact__details-pin-text'>
          <p>Here we roast:</p>
          <p>ul. Marii Skłodowskiej-Curie 8B</p>
          <p>56-400 Oleśnica</p>
        </div>
      </div>
      <div className='contact__details-map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.3886826840894!2d17.383354915663958!3d51.2119151400857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe389bb113a31%3A0x45ea7558c221d38c!2sPalarnia%20kawy%20EGO%20COFFEE!5e0!3m2!1spl!2spl!4v1637537116254!5m2!1spl!2spl'
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>
    </div>
  )
}

export default Details
